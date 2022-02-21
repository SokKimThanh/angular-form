import { SelectionModel } from '@angular/cdk/collections';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { MatTableDataSource } from '@angular/material/table';
import { debounceTime } from 'rxjs';
import { People } from '../filtering-table/element.interface';
import { PEOPLE } from '../filtering-table/ELEMENT_DATA';

@Component({
  selector: 'app-overlay-effect',
  templateUrl: './overlay-effect.component.html',
  styleUrls: ['./overlay-effect.component.scss']
})
export class OverlayEffectComponent implements OnInit {
  isOpen = false;
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
  @ViewChild('filterDivName') filterDivName!: ElementRef;
  @Input() showInputNameOnly!: boolean;
  isFilteringInputSearch!: boolean;
  constructor(private fb: FormBuilder, private renderer: Renderer2) {
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
    if (this.showInputNameOnly) {
      this.renderer.setStyle(this.filterDivName.nativeElement, 'width', '100%');
    }
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
    this.inputSearchControl?.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(
      (enteringFilter: string) => {
        this.isFilteringInputSearch = enteringFilter ? true : false;
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
    this.isOpen = !this.isOpen;
    this.inputSearchControl?.reset();
  }
  clear(): void {
    this.autocompleteForm.reset();
  }

}
