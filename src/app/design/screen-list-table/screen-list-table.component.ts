import { ResizeDetection } from './../screen-list-resize-dectection/screen-list-resize-dectection.interface';
import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { matMenu, matMenuItem, matMenuItemMatIcon } from './screen-list-table.edit-button.scss';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { ScreenListTableSortTime } from './screen-list-table.sort-time';
import { ActionsElement, ActionsEvent } from './screen-list-table-config.interface';
import { ScreenListGuideTable } from '../screen-list-guide/screen-list-guide.interface';
import { SCREENLISTGUIDETABLE } from '../screen-list-guide/screen-list-guide.data';
@Component({
  selector: 'app-screen-list-table',
  templateUrl: './screen-list-table.component.html',
  styleUrls: [
    './screen-list-table.component.scss',
    './screen-list-table.sticky-header.scss',
    './screen-list-table.hightlighted.scss',
    './screen-list-table.paginator.scss',
  ],
  encapsulation: ViewEncapsulation.None,
})
export class ScreenListTableComponent implements OnInit, AfterViewInit, OnChanges {
  matMenu: any;
  matMenuItem: any;
  matMenuItemMatIcon: any;
  selection = new SelectionModel<any>(true, []);
  resizeDetection!: ResizeDetection;
  // We will need this getter to exctract keys from tableCols
  // tslint:disable-next-line:typedef
  get keys() { return this.tableCols.map(({ key }) => key); }
  screenListGuideTable!: ScreenListGuideTable;

  // tslint:disable-next-line:no-input-rename
  @Input('cols') tableCols = [];

  @Input() selectedRow!: any;
  @Input() inputFilterList!: string;
  @Input() totalItems!: number;
  @Input() pageSize!: number;
  @Input() pageIndex!: number;
  @Input() previousPageIndex!: number;
  @Input() pageSizeOptions!: string[];
  @Input() newElementData: any[] = [];
  @Input() newDataSource!: MatTableDataSource<any>;
  @Input() paginatorLabel!: string;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // tslint:disable-next-line:no-output-rename
  @Output('outSelectedRow') outSelectedRow = new EventEmitter<any>();
  // tslint:disable-next-line:no-output-rename
  @Output('onAction') actionEventEmitter = new EventEmitter<ActionsElement>();

  @Output() pageEventEmitter = new EventEmitter<PageEvent>();
  @Input() pageEvent!: PageEvent;

  /* vẽ lại overflow table */
  @ViewChild('matCardTable') matCardTable: any;
  screenListTableSortTime!: ScreenListTableSortTime;
  constructor(
    public dialog: MatDialog,
    // tslint:disable-next-line:variable-name
    private _liveAnnouncer: LiveAnnouncer,
  ) {
  }
  ngOnChanges(changes: SimpleChanges): void {
    /* vẽ overflow theo page_size paginator @Input của table design*/
    // const pageEvent: any = changes?.pageEvent;
    // if (pageEvent && pageEvent.currentValue) {
    //   this.pageEvent = pageEvent.currentValue;
    //   if (this.matCardTable) {
    //     const matCardTable = this.matCardTable.nativeElement;
    //     const classes = matCardTable.classList;
    //     if (this.pageEvent.pageSize > 20) {
    //       classes.add('mat-card-table-turnon-overflow');
    //     } else {
    //       classes.remove('mat-card-table-turnon-overflow');
    //     }
    //   }
    // }
    if (this.sort) {
      this.sortData(this.sort);
    }
  }
  ngOnInit(): void {
    if (!(this.newDataSource && this.tableCols)) {
      this.screenListGuideTable = SCREENLISTGUIDETABLE;
      return;
    }
    this.refresh();
  }
  refresh(): void {
    this.matMenu = matMenu;
    this.matMenuItem = matMenuItem;
    this.matMenuItemMatIcon = matMenuItemMatIcon;
    this.selection.changed.subscribe(selectedRow => {
      this.selectedRow = selectedRow.added[0];
    });
  }
  ngAfterViewInit(): void {
    if (this.newDataSource) {
      this.newDataSource.paginator = this.paginator;
      this.newDataSource.sort = this.sort;
      this.pageEvent = this.paginator;
    }
  }
  onSelectedRow(selectedRow: any): void {
    this.selection.clear();
    this.selection.toggle(selectedRow);
    this.outSelectedRow.emit(selectedRow);
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
  onActionHandler(elements: any, actionsEvent: ActionsEvent, mouseEvent?: MouseEvent): void {
    if (mouseEvent && mouseEvent.type === 'dblclick') {
      actionsEvent = {
        active: true,
        mouseClickEvent: mouseEvent,
        mouseClickMode: 'editing',
        svgIcon: 'edit-pencil',
      };
    }
    const actionElement: ActionsElement = { elementdata: elements, action: actionsEvent, };
    this.actionEventEmitter.emit(actionElement);
  }
  // this function will return a value from column configuration
  // depending on the value that element holds
  showBooleanValue(elt: any, column: any): any {
    return column.config.values[`${elt[column.key]}`];
  }
  showBooleanClass(column: any): any {
    let result = '';
    if (column.isClass) {
      if (column.isArrayClass) {
        for (const key of column.class) {
          result += key ? `${key ? key : ''},` : `${key ? key : ''},`.substring(0, result.length - 1);
        }
        return result.substring(0, result.length - 1);
      }
      else {
        result = column.class;
        return result;
      }
    }
    if (column.config && column.config.isClass) {
      if (column.config.isArrayClass) {
        for (const key of column.config.class) {
          result += key ? `${key ? key : ''},` : `${key ? key : ''},`.substring(0, result.length - 1);
        }
        return result.substring(0, result.length - 1);
      }
      else {
        result = column.config.class;
        return result;
      }
    }
  }
  showBooleanChildren(element: any, column: any): any {
    let result = '';
    const type = typeof (column.config.children);
    if (type.includes('1')) {

    }
    for (const key of column.config.children) {
      result += element[key] ? `${element[key] ? element[key] : ''}/` : `${element[key] ?
        element[key] : ''}/`.substring(0, result.length - 1);
    }
    return result.substring(0, result.length - 1);
  }
  showBooleanSVGIcon(element: any, column: any): any {
    return column.config.values[`${this.showBooleanChildren(element, column)}`];
  }
  showBooleanChecks(element: any, column: any): any {
    return column.config.selection.values[`${element[column.config.selection.key]}`];
  }
  getStt(index: number, pageEvent: PageEvent): number {
    let result = 0;
    if (pageEvent.previousPageIndex) {
      // tslint:disable-next-line:max-line-length
      result = (index + 1) + (pageEvent.pageSize * (pageEvent.previousPageIndex > 0 ? pageEvent.previousPageIndex - 1 : pageEvent.previousPageIndex));
    }
    if (pageEvent.pageIndex) {
      result = (index + 1) + (pageEvent.pageSize * pageEvent.pageIndex);
    } else {
      result = index + 1;
    }
    return result;
  }
  sizeDetectionEventEmitter(resizeDetection: ResizeDetection): void {
    this.resizeDetection = resizeDetection;
  }
  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort): void {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  sortData(sort: Sort): any {
    this.screenListTableSortTime = new ScreenListTableSortTime(this.newDataSource.data.slice());
    this.newDataSource.data = this.screenListTableSortTime.sortData(sort);
  }
}
