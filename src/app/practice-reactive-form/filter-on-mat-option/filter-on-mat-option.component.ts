import { OverlayEffectTable } from './../overlay-effect-table/overlay-effect-table';
import { WaitingPageService } from './../waiting-page/waiting-page.service';
import { OverLayEffectTableColumn, OverlayEffectTableInput, OverlayEffectTablePaginator } from './../overlay-effect/overlay-effect-table-config.interface';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { OverlayEffectTablesDataSource } from './overlay-effect-table.cdk';
import { OverlayEffectTablesService } from './overlay-effect-table.service';

@Component({
  selector: 'app-filter-on-mat-option',
  templateUrl: './filter-on-mat-option.component.html',
  styleUrls: ['./filter-on-mat-option.component.scss']
})
export class FilterOnMatOptionComponent implements OnInit {
  showInput!: OverlayEffectTableInput;
  showPaginator!: OverlayEffectTablePaginator;
  dataSource!: MatTableDataSource<any>;
  cols: OverLayEffectTableColumn[] = [
    { key: 'id', display: 'mã hiển thị' },
    { key: 'name', display: 'tên hiển thị' },
    { key: 'colour', display: 'Địa chỉ' },
    { key: 'pet', display: 'tuổi' },
  ]
  loading!: boolean;
  constructor(private oetService: OverlayEffectTablesService) {

  }

  ngOnInit(): void {
    this.showInput = {
      isShowInputNameOnly: true,
      showInputSearchID: 'ID',
      showInputSearchName: 'Name',
      input: [{ key: '', display: '' }],
    };
    this.showPaginator = {
      length: 0,
      pageIndex: 0,
      pageSize: 20,
      pageSizeOptions: [20, 100, 200, 500, 1000],
      sortDirection: 'asc'
    }
    this.dataSource = new MatTableDataSource(this.oetService.getOverlayEffectTable)
  }
  outSelectedRow(selectedRow: OverlayEffectTable): void {
    console.log(selectedRow);
  }
}
