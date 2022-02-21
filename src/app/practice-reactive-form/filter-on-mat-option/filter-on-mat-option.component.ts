import { OverLayEffectTableColumn, OverlayEffectTableInput } from './../overlay-effect/overlay-effect-table-config.interface';
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
  filteredVariables = [{}];
  showInputNameOnly: OverlayEffectTableInput;
  newDataSouce = new MatTableDataSource(this.variables);
  cols: OverLayEffectTableColumn[] = [
    { key: 'id', display: 'mã hiển thị' },
    { key: 'name', display: 'tên hiển thị' },
    { key: 'address', display: 'Địa chỉ' },
    { key: 'age', display: 'tuổi' },
  ]
  constructor() {
    for (let i = 0; i <= 100; i++) {
      this.variables.push({ id: i, name: `option${i}`, age: i * 2 / 0.5, address: `${i} adress` })
    }
    this.showInputNameOnly = {
      isShowInputNameOnly: true,
      input: [{ key: '', display: '' }]
    };
  }

  ngOnInit(): void {
    this.filteredVariables = this.variables.slice();
  }
  anotherArray = this.variables;

  getSubtier(value: any): void {
    console.log(value);
  }
  outSelectedRow(selectedRow: Variables): void {
    console.log(selectedRow);
  }
}
