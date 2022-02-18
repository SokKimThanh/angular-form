import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSelect, MatSelectChange } from '@angular/material/select';
import { People, HienThiMotField } from './element.interface';
import { PEOPLE } from './ELEMENT_DATA';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-filtering-table',
  templateUrl: './filtering-table.component.html',
  styleUrls: ['./filtering-table.component.scss']
})
export class FilteringTableComponent implements OnInit, AfterViewInit {
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
  selectedFilter!: People;
  @ViewChild('matSelect') matSelect!: MatSelect;
  @ViewChild('filterId') filterId!: MatInput;
  @ViewChild('filterName') filterName!: MatInput;
  @Input() showInputNameOnly!: boolean;

  constructor(private fb: FormBuilder) {
    this.autocompleteForm = this.fb.group({
      /* <mat-select-trigger>
      {{autocompleteForm.get('selectControl')?.value ? autocompleteForm.get('selectControl')?.value : ''}}
      </mat-select-trigger> */
      selectControl: null,
      inputSearchControl: '',
      inputShowIdFilterControl: '',
      inputShowNameFilterControl: ''
    })
    this.dataSource.data = this.peoples;
    /* watching selected row */
    this.selection.changed.subscribe(s => {
      this.selectedFilter = s.source.selected[0];
    });
    this.showInputNameOnly = this.showInputNameOnly ? this.showInputNameOnly : false;
  }
  ngAfterViewInit(): void {
    
  }
  get selectedControl() {
    return this.autocompleteForm.get('selectedControl');
  }
  get inputSearchControl() {
    return this.autocompleteForm.get('inputSearchControl');
  }
  get inputShowIdFilterControl() {
    return this.autocompleteForm.get('inputShowIdFilterControl');
  }
  get inputShowNameFilterControl() {
    return this.autocompleteForm.get('inputShowNameFilterControl');
  }

  ngOnInit() {
    // listen for changes
    this.inputSearchControl?.valueChanges.subscribe(
      (enteringFilter: string) => {
        this.inputFilterNoResult = enteringFilter;
        this.dataSource.filter = enteringFilter;
      }
    );
    this.selectedControl?.valueChanges.subscribe(
      (selectedFilter: People) => {
        this.selectedFilter = selectedFilter;
      }
    );
  }
  onSelectedRow(selectedRow: any): void {
    this.selection.clear();
    this.selection.toggle(selectedRow);
    this.outSelectedRow.emit(selectedRow);
    this.selectedFilter = selectedRow;
    this.selectedControl?.patchValue(this.selectedFilter);
    this.inputShowIdFilterControl?.patchValue(this.selectedFilter.id);
    this.inputShowNameFilterControl?.patchValue(this.selectedFilter.name);
    this.inputSearchControl?.reset();
    this.matSelect.close();
  }
}
