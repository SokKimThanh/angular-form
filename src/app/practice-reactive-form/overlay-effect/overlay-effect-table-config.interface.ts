
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
    isShowInputNameOnly: boolean | null;
    input: OverLayEffectTableColumn[];
}
export interface OverlayEffectTablePaginator {
    totalItems: number;
    pageSize: number;
    pageIndex: number;
    pageSizeOptions: string[];
}