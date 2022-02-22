import { MouseClickMode } from './screen-list-button.interface';

export const MOUSECLICKMODE: MouseClickMode = {
    ADDING: 'adding',
    RELOADING: 'reloading',
    QUESTIONING: 'questioning',
    EDITING: 'editing',
    DELETING: 'deleting'
};

export const SVGICON = {
    ADDING: 'ADD_ICON',
    RELOADING: 'REFRESH_ICON',
    QUESTIONING: 'QUESTION_MARK',
    DELETING: 'delete-recycle-bin',
    EDITING: 'edit-pencil',
};

export const MOUSECLICKEVENT = {
    EVENT: new MouseEvent('click'),
};

const ADDING = {
    svgIcon: SVGICON.ADDING,
    mouseClickMode: MOUSECLICKMODE.ADDING,
    mouseClickEvent: MOUSECLICKEVENT.EVENT,
    active: true
};
const RELOADING = {
    svgIcon: SVGICON.RELOADING,
    mouseClickMode: MOUSECLICKMODE.RELOADING,
    mouseClickEvent: MOUSECLICKEVENT.EVENT,
    active: true
};
const QUESTIONING = {
    svgIcon: SVGICON.QUESTIONING,
    mouseClickMode: MOUSECLICKMODE.QUESTIONING,
    mouseClickEvent: MOUSECLICKEVENT.EVENT,
    active: true
};
const DELETING = {
    svgIcon: SVGICON.DELETING,
    mouseClickMode: MOUSECLICKMODE.DELETING,
    mouseClickEvent: MOUSECLICKEVENT.EVENT,
    active: true
};
const EDITING = {
    svgIcon: SVGICON.EDITING,
    mouseClickMode: MOUSECLICKMODE.EDITING,
    mouseClickEvent: MOUSECLICKEVENT.EVENT,
    active: true
};

export const SCREEN_LIST_BUTTON = [QUESTIONING, RELOADING, ADDING];

export { ADDING, RELOADING, QUESTIONING, DELETING, EDITING };
