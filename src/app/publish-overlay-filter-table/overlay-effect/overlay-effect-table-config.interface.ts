
export interface OverLayEffectTableColumn {
  key: string;
  display: string;
  isClass?: boolean; isArrayClass?: boolean; class?: string | string[];
  matSortHeader?: {
    turnoff: boolean;
  };
  inputShow?: {
    name?: string,
    id?: string,
    isShowName: boolean
  }
}

export interface OverlayEffectTableInput {
  isShowInputNameOnly: boolean;
  showInputSearchID: string;
  showInputSearchName: string;
  input: OverLayEffectTableColumn[];
}
export interface OverlayEffectTablePaginator {
  length: number;
  pageSize: number;
  pageIndex: number;
  pageSizeOptions: number[];
  sortDirection: string;
}
export const PAGESIZEOPTIONS = [5, 10, 25, 100];