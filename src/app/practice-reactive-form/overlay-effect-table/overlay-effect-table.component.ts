import { MatInput } from '@angular/material/input';
import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { People } from '../filtering-table/element.interface';
import { OverlayEffectTablePaginator, OverLayEffectTableColumn } from '../overlay-effect/overlay-effect-table-config.interface';

@Component({
  selector: 'app-overlay-effect-table',
  templateUrl: './overlay-effect-table.component.html',
  styleUrls: ['./overlay-effect-table.component.scss']
})
export class OverlayEffectTableComponent implements OnInit, AfterViewInit {
  /* ================================================================= */
  /* KHU VUC THIET INPUT OUTPUT */
  /* ================================================================= */
  @Input() dataSource = new MatTableDataSource();
  @Input() pageEvent!: PageEvent;
  @Input() showPaginator!: OverlayEffectTablePaginator;
  @Input('cols') tableCols: OverLayEffectTableColumn[] = []
  @Output('outSelectedRow') outSelectedRow = new EventEmitter<any>();
  @Output() pageEventEmitter = new EventEmitter<PageEvent>();

  @ViewChild('paginator') paginator!: MatPaginator;
  /* ================================================================= */
  /* KHU VUC THIET VARIABLE HTML */
  /* ================================================================= */
  get keys() { return this.tableCols.map(({ key }) => key); }
  selection = new SelectionModel<any>(true, []);
  inputFilterNoResult!: string;
  private _selection = new Set<any>();
  isSelected(value: any): boolean {
    return this._selection.has(value);
  }
  isFilteringInputSearch!: boolean;
  constructor() {
    this.isFilteringInputSearch = false;
  }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
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
  }
  clear(): void {

  }
  applyFilter(filter: string): void {
    this.dataSource.filter = filter;
  }
}
