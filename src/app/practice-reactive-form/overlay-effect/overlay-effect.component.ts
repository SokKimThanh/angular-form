import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { debounceTime } from 'rxjs';
import { People } from '../filtering-table/element.interface';
import { PEOPLE } from '../filtering-table/ELEMENT_DATA';
import { OverLayEffectTableColumn, OverlayEffectTableInput, OverlayEffectTablePaginator, PAGESIZEOPTIONS } from './overlay-effect-table-config.interface';

@Component({
  selector: 'app-overlay-effect',
  templateUrl: './overlay-effect.component.html',
  styleUrls: ['./overlay-effect.component.scss']
})
export class OverlayEffectComponent implements OnInit, AfterViewInit {
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
    pageIndex: 0,
    pageSize: null,
    pageSizeOptions: PAGESIZEOPTIONS,
    length: null,
  };
  @Input('cols') tableCols!: OverLayEffectTableColumn[]
  @Input() showInput!: OverlayEffectTableInput
  @Output('outSelectedRow') outSelectedRow = new EventEmitter<any>();
  @Output() pageEventEmitter = new EventEmitter<PageEvent>();

  @ViewChild('filterDivName') filterDivName!: ElementRef;
  @ViewChild('scheduledOrdersPaginators') paginator!: MatPaginator;
  @ViewChild('inputSearch') inputSearch!: MatInput;
  /* ================================================================= */
  /* KHU VUC THIET VARIABLE HTML */
  /* ================================================================= */
  get keys() { return this.tableCols.map(({ key }) => key); }
  get keysOverlayEffectInput() { return this.showInput.input.map(({ key }) => key); }
  selection = new SelectionModel<any>(true, []);
  inputFilterNoResult!: string;
  private _selection = new Set<any>();
  isSelected(value: any): boolean {
    return this._selection.has(value);
  }
  selectedFilter!: People;
  isFilteringInputSearch!: boolean;
  constructor(private fb: FormBuilder, private renderer: Renderer2, private cd: ChangeDetectorRef) {
    this.autocompleteForm = this.fb.group({
      inputSearchControl: '',
      inputShowIdFilterControl: '',
      inputShowNameFilterControl: ''
    })
    /* watching selected row */
    this.selection.changed.subscribe(s => {
      this.selectedFilter = s.source.selected[0];
    });
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
    if (!this.tableCols) {
      this.tableCols = [
        { key: 'name', display: 'NAME' },
        { key: 'colour', display: 'FAVOURITE COLOUR' },
        { key: 'id', display: 'ID' },
        { key: 'pet', display: 'PET' }
      ]
      this.showInput = {
        isShowInputNameOnly: false,
        showInputSearchID: 'Mã thông tin',
        showInputSearchName: 'Tên thông tin',
        input: this.tableCols
      };
    }
  }
  ngAfterViewInit(): void {
    if (this.showInput) {
      this.renderer.setStyle(this.filterDivName.nativeElement, 'width', '100%');
    }
    if (this.dataSource) {
      if (this.paginator) {
        this.dataSource.paginator = this.paginator;
      } else {
        console.log('no paginator, no init paginator');
      }
    } else {
      console.log('no datasource, no init paginator');
    }
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
  loadingOverlayFilteringTable(): boolean {
    this.isOpen = !this.isOpen;
    // this.inputSearch.focus();
    // this.cd.detectChanges();
    return this.isOpen;
  }
}
