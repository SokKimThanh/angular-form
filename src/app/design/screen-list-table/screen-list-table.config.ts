import { ActionsElement, TableReuseableColumns } from './screen-list-table-config.interface';
import { ScreenListTable } from './screen-list-table.interface';

export class TableReuseableConfig implements ScreenListTable {
    cols: TableReuseableColumns[];
    ELEMENT_DATA: any[];
    constructor(cols: TableReuseableColumns[], datas: any[]) {
        this.cols = cols;
        this.ELEMENT_DATA = datas;
    }
    onActionHandler(event: ActionsElement): void {
    }
}
