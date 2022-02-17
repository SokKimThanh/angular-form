import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSelect } from '@angular/material/select';
import { People } from './element.interface';
import { PEOPLE } from './ELEMENT_DATA';

@Component({
  selector: 'app-filtering-table',
  templateUrl: './filtering-table.component.html',
  styleUrls: ['./filtering-table.component.scss']
})
export class FilteringTableComponent implements OnInit {
  /* ================================================================= */
  /* KHU VUC THIET LAP FORM MODEL */
  /* ================================================================= */
  autocompleteForm!: FormGroup;
  peoples: People[] = PEOPLE;
  @Input('cols') tableCols = [
    { key: 'name', display: 'NAME' },
    { key: 'colour', display: 'FAVOURITE COLOUR' },
    { key: 'id', display: 'ID' },
    { key: 'pet', display: 'PET' }
  ]
  get keys() { return this.tableCols.map(({ key }) => key); }
  selection = new SelectionModel<any>(true, []);
  @Output('outSelectedRow') outSelectedRow = new EventEmitter<any>();
  inputFilterNoResult!: string;
  private _selection = new Set<any>();
  isSelected(value: any): boolean {
    return this._selection.has(value);
  }
  @Input() dataSource = new MatTableDataSource();
  selectedFilter: People = { id: 0, name: '', colour: '', pet: '' };
  @ViewChild('matSelect') matSelect!: MatSelect;
  constructor(private fb: FormBuilder) {
    this.autocompleteForm = this.fb.group({
      /* <mat-select-trigger>
      {{autocompleteForm.get('selectControl')?.value ? autocompleteForm.get('selectControl')?.value : ''}}
      </mat-select-trigger> */
      selectControl: [this.peoples[0].name],
      inputSearchControl: '',
    })
    this.dataSource.data = this.peoples;
    /* watching selected row */
    this.selection.changed.subscribe(s => {
      this.selectedFilter = s.source.selected[0];
    });
  }
  get selectedControl() {
    return this.autocompleteForm.get('selectedControl');
  }
  get inputSearchControl() {
    return this.autocompleteForm.get('inputSearchControl');
  }

  ngOnInit() {
    // listen for changes
    this.inputSearchControl?.valueChanges.subscribe(
      (enteringFilter: string) => {
        this.inputFilterNoResult = enteringFilter;
        this.dataSource.filter = enteringFilter;
      }
    );
  }
  onSelectedRow(selectedRow: any): void {
    this.selection.clear();
    this.selection.toggle(selectedRow);
    this.outSelectedRow.emit(selectedRow);
    this.selectedFilter = selectedRow;
    console.log(this.selectedFilter);
    this.selectedControl?.patchValue(this.selectedFilter);
    this.matSelect.close();
  }
  onDblclickSelectedRow(selectedRow: any, mouseEvent?: MouseEvent): void {
    if (mouseEvent && mouseEvent.type === 'dblclick') {
      this.selectedFilter = selectedRow;
      console.log(this.selectedFilter);
      this.selectedControl?.patchValue(this.selectedFilter);
      this.matSelect.close();
    }
  }
}
