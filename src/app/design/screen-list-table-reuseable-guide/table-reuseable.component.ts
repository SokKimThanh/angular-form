import { SelectionModel } from '@angular/cdk/collections';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserData } from './table-reuseable.data';

@Component({
  selector: 'app-table-reuseable',
  templateUrl: './table-reuseable.component.html',
  styleUrls: ['./table-reuseable.component.scss']
})
export class TableReuseableComponent implements OnInit {
  selection = new SelectionModel<UserData>(true, []);

  // tslint:disable-next-line:no-output-rename
  @Output('outSelectedRow') outSelectedRow = new EventEmitter<UserData>();

  // tslint:disable-next-line:no-output-rename
  @Output('onAction') emitter = new EventEmitter();
  // tslint:disable-next-line:no-input-rename
  @Input('data') dataSource!: MatTableDataSource<UserData>;
  // tslint:disable-next-line:no-input-rename
  @Input('cols') tableCols = [];

  // We will need this getter to exctract keys from tableCols
  // tslint:disable-next-line:typedef
  get keys() { return this.tableCols.map(({ key }) => key); }
  // this function will return a value from column configuration
  // depending on the value that element holds
  showBooleanValue(elt: { [x: string]: any; }, column: { config: { values: { [x: string]: void; }; }; key: string | number; }): void {
    return column.config.values[`${elt[column.key]}`];
  }
  constructor() { }

  ngOnInit(): void {
    if (!this.dataSource) {
      return;
    }
  }
  onSelectedRow(selectedRow: UserData): void {
    this.dataSource.data.forEach(rows => {
      if (selectedRow === rows) {
        this.selection.clear();
        this.selection.toggle(selectedRow);
      } else {
        this.outSelectedRow.emit(selectedRow);
      }
    });
  }
}
