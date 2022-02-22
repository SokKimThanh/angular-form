import { Sort } from '@angular/material/sort';

export class ScreenListTableSortTime {
    private sortedData: any;
    constructor(sortedData?: any) {
        this.sortedData = sortedData;
    }
    sortData(sort: Sort): any {
        if (!sort.active || sort.direction === '') {
            return this.sortedData;
        } else {
            // NGAY_SINH 30/10/2021
            const keys = ['NGAY_SINH', 'NGAY_BATDAU', 'NGAY_KETTHUC'];
            if (sort.active.includes(keys[0]) ||
                sort.active.includes(keys[1]) ||
                sort.active.includes(keys[2])) {
                this.sortedData = this.sortedData.sort((a: any, b: any) => {
                    let aValue: string = (a as any)[sort.active];
                    let bValue: string = (b as any)[sort.active];
                    if (!aValue && !(aValue?.length > 0)) {
                        aValue = '00/00/0000';
                    }
                    if (!bValue && !(bValue?.length)) {
                        bValue = '00/00/0000';
                    }
                    const aValues = aValue.split('/');
                    const bValues = bValue.split('/');
                    let aValueOfTime = new Date(`${aValues[2]}-${aValues[1]}-${aValues[0]}`).getTime().valueOf();
                    let bValueOfTime = new Date(`${bValues[2]}-${bValues[1]}-${bValues[0]}`).getTime().valueOf();
                    aValueOfTime = aValueOfTime ? aValueOfTime : 1;
                    bValueOfTime = bValueOfTime ? bValueOfTime : 1;
                    return (aValueOfTime < bValueOfTime ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
                });
            } else {
                this.sortedData = this.sortedData.sort((a: any, b: any): number => {
                    const aValue = (a as any)[sort.active];
                    const bValue = (b as any)[sort.active];
                    return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
                });
            }
        }
        return this.sortedData;
    }
}
