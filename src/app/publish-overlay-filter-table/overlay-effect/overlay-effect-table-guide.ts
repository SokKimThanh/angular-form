
export const EXAMPLECODEHTML = `<app-overlay-effect [showInput]="showInput" [dataSource]="dataSource" [cols]="cols" [showPaginator]="showPaginator" (outSelectedRow)="outSelectedRow($event)"></app-overlay-effect>`
export const EXAMPLECODETS = `
import { OverLayEffectTableColumn, OverlayEffectTableInput, OverlayEffectTablePaginator } from './../overlay-effect/overlay-effect-table-config.interface';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
export interface Variables {
  id: number, name: string, address: string, age: number
}
@Component({
  selector: 'app-filter-on-mat-option',
  templateUrl: './filter-on-mat-option.component.html',
  styleUrls: ['./filter-on-mat-option.component.scss']
})
export class FilterOnMatOptionComponent implements OnInit {
  variables: Variables[] = [];
  showInput!: OverlayEffectTableInput;
  showPaginator!: OverlayEffectTablePaginator;
  dataSource = new MatTableDataSource(this.variables);
  cols: OverLayEffectTableColumn[] = [
    { key: 'id', display: 'mã hiển thị' },
    { key: 'name', display: 'tên hiển thị' },
    { key: 'address', display: 'Địa chỉ' },
    { key: 'age', display: 'tuổi' },
  ]
  constructor() {
    for (let i = 0; i <= 10000; i++) {
      this.variables.push({ id: i, name: "option " + i, age: i * 2 / 0.5, address: i + " adress" })
    }
    this.showInput = {
      isShowInputNameOnly: true,
      showInputSearchID: 'ID',
      showInputSearchName: 'Name',
      input: [{ key: '', display: '' }]
    };
    this.showPaginator = {
      length: 0,
      pageIndex: 0,
      pageSize: 20,
      pageSizeOptions: [20, 100, 200, 500, 1000]
    }
  }

  ngOnInit(): void {
  }
  outSelectedRow(selectedRow: Variables): void {
    console.log(selectedRow);
  }
}
`