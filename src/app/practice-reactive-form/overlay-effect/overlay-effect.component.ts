import { SelectionModel } from '@angular/cdk/collections';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { MatSelect } from '@angular/material/select';
import { MatTableDataSource } from '@angular/material/table';
import { debounceTime } from 'rxjs';
import { People } from '../filtering-table/element.interface';
import { PEOPLE } from '../filtering-table/ELEMENT_DATA';
import { OverLayEffectTableColumn, OverlayEffectTableInput, OverlayEffectTablePaginator } from './overlay-effect-table-config.interface';

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
  /* ================================================================= */
  /* KHU VUC THIET INPUT OUTPUT */
  /* ================================================================= */
  @Input() dataSource = new MatTableDataSource();
  @Input() pageEvent!: PageEvent;
  @Input() showPaginator: OverlayEffectTablePaginator = {
    pageIndex: 0, pageSize: this.dataSource.data.length,
    pageSizeOptions: ['20', '50', '100', '500', '1000'],
    totalItems: this.dataSource.data.length,
  };
  @Input() showInputNameOnly: OverlayEffectTableInput = {
    isShowInputNameOnly: null,
    input: [
      { key: 'id', display: 'Nhập mã' },
      { key: 'name', display: 'Nhập tên' },
    ]
  };
  @Input('cols') tableCols: OverLayEffectTableColumn[] = [
    { key: 'name', display: 'NAME' },
    { key: 'colour', display: 'FAVOURITE COLOUR' },
    { key: 'id', display: 'ID' },
    { key: 'pet', display: 'PET' }
  ]
  @Output('outSelectedRow') outSelectedRow = new EventEmitter<any>();
  @Output() pageEventEmitter = new EventEmitter<PageEvent>();

  @ViewChild('filterDivName') filterDivName!: ElementRef;
  @ViewChild('matCardTable') matCardTable: any;

  /* ================================================================= */
  /* KHU VUC THIET VARIABLE HTML */
  /* ================================================================= */
  get keys() { return this.tableCols.map(({ key }) => key); }
  get keysOverlayEffect() { return this.showInputNameOnly.input.map(({ key }) => key); }
  selection = new SelectionModel<any>(true, []);
  inputFilterNoResult!: string;
  private _selection = new Set<any>();
  isSelected(value: any): boolean {
    return this._selection.has(value);
  }
  selectedFilter!: People;
  isFilteringInputSearch!: boolean;
  constructor(private fb: FormBuilder, private renderer: Renderer2) {
    this.autocompleteForm = this.fb.group({
      inputSearchControl: '',
      inputShowIdFilterControl: '',
      inputShowNameFilterControl: ''
    })
    this.dataSource.data = this.peoples;
    /* watching selected row */
    this.selection.changed.subscribe(s => {
      this.selectedFilter = s.source.selected[0];
    });
    this.showInputNameOnly.isShowInputNameOnly = this.showInputNameOnly.isShowInputNameOnly ? this.showInputNameOnly.isShowInputNameOnly : false;
  }
  ngAfterViewInit(): void {
    if (this.showInputNameOnly) {
      this.renderer.setStyle(this.filterDivName.nativeElement, 'width', '100%');
    }
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
  }
  onSelectedRow(selectedRow: any): void {
    this.selection.clear();
    this.selection.toggle(selectedRow);
    this.outSelectedRow.emit(selectedRow);
    this.selectedFilter = selectedRow;
    this.inputShowIdFilterControl?.patchValue(this.selectedFilter.id);
    this.inputShowNameFilterControl?.patchValue(this.selectedFilter.name);
    this.isOpen = !this.isOpen;
    this.inputSearchControl?.reset();
  }
  clear(): void {
    this.autocompleteForm.reset();
  }
  emitPaginationPage(pageEvent: PageEvent): void {
    this.pageEventEmitter.emit(pageEvent);
    if (pageEvent) {
      if (this.matCardTable) {
        const matCardTable = this.matCardTable.nativeElement;
        const classes = matCardTable.classList;
        if (pageEvent.pageSize > 20) {
          classes.add('mat-card-table-turnon-overflow');
        } else {
          classes.remove('mat-card-table-turnon-overflow');
        }
      }
    }
  }
}
