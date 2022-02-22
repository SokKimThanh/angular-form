import { ScreenListButton } from '../screen-list-button/screen-list-button.interface';

export interface TableReuseableColumns {
    key: string;
    display: string;
    isClass?: boolean; isArrayClass?: boolean; class?: string | string[];
    matSortHeader?: {
        turnoff: boolean;
    };
    config?: {
        isNumber?: boolean,
        isSticky?: boolean, isStickyEnd?: boolean,
        isDate?: boolean, format?: string,
        isBoolean?: boolean, values?: {
            true?: string | boolean, false?: string | boolean,
            1?: string, 2?: string, 3?: string,
            'Nam'?: string, 'Nữ'?: string, 'N/A'?: string
        },
        isAction?: boolean, actions?: ActionsEvent[], actionStarColumn?: { isActionLocked: boolean }
        isChildren?: boolean, children?: string[],
        isClass?: boolean, isArrayClass?: boolean, class?: string | string[],
        isSex?: boolean,
        isSelection?: boolean,
        selection?: {
            checked?: boolean,
            indeterminate?: boolean,
            labelPosition?: string, /* 'before' | 'after', */
            disabled?: boolean,
            isChildren?: boolean, children?: string | string[], key?: string;
            isBoolean?: boolean, values?: { true?: string | boolean, false?: string | boolean },
        },
        isCodeAndCodeName?: boolean,
    };
}
// tslint:disable-next-line:no-empty-interface
export interface ActionsEvent extends ScreenListButton { }

export interface ActionsElement {
    action: ActionsEvent;
    elementdata: any;
    index?: number;
}
