import { ScreenListGuideButton, ScreenListGuideInputSearch, ScreenListGuideSelection, ScreenListGuideTable, ScreenListGuideToggle } from "./screen-list-guide.interface";


export const SCREENLISTGUIDEBUTTON: ScreenListGuideButton = {
  codeObjectName: 'screenListButton',
  codeObjectEvent: '(buttonEventEmitter)="onClickEventEmitter($event)"',
  codeObjectEventName: 'buttonEventEmitter',
  codeExample: `<app-screen-list-button [screenListButton]='screenListButton' (buttonEventEmitter)="onClickEventEmitter($event)"></app-screen-list-button>`,
  codeExampleFile: `ngOnInit(): void {
        this.screenListButton = {
          mouseClickMode: MOUSECLICKMODE.ADDING,
          mouseClickEvent: MOUSECLICKEVENT.EVENT,
          svgIcon: 'ADD_ICON',
          active: true
        };
      }`,
  codeExampleFile2: `ngOnInit(): void { this.screenListButton = ADDING | RELOADING | QUESTIONING, }`,
  codeFileName: 'screen-bar.component.ts',
  codeTagName: 'app-screen-list-button',
};

export const SCREENLISTGUIDESELECTION: ScreenListGuideSelection = {
  codeObjectName: 'selectionOptionList',
  codeObjectEventName: 'selectionOptionByEventEmitter',
  codeObjectEvent: '(selectionOptionByEventEmitter)="selectionOptionBy($event)"',
  codeTagName: 'app-screen-list-selection',
  codeExample: `<app-screen-list-selection [selectionOptionList]="selectionOptionList" (selectionOptionByEventEmitter)="selectionOptionBy($event)">`,
  codeExampleFile: `ngOnInit(): void {
    this.selectionOptionList = {
      title: 'Tìm theo',
      list: [
        { value: '1', viewValue: 'Mã HSSK' },
        { value: '2', viewValue: 'CMND' },
        { value: '3', viewValue: 'Tên' }
      ]
    }
  }`,
  codeExampleFile2: `ngOnInit(): void {
    this.selectionOptionList = SELECTIONOPTIONLIST;
   }`,
  codeFileName: 'ho-so-suc-khoe.component.ts',
};
export const SCREENLISTGUIDETOGGLE: ScreenListGuideToggle = {
  codeObjectName: 'toggleName',
  codeTagName: 'app-screen-list-toggle',
  codeExample: `<app-screen-list-toggle [toggleName]="toggleName" (toggleEventEmitter)="toggle($event)">
  </app-screen-list-toggle>`,
  codeExample1: `<app-screen-list-toggle [toggleName]="'Tỉnh-Phường-Xã'" (toggleEventEmitter)="toggle($event)">
  </app-screen-list-toggle>`,
};
export const SCREENLISTGUIDEINPUTSEARCH: ScreenListGuideInputSearch = {
  codeObjectName: 'screenListInputSearch',
  codeTagName: 'app-screen-list-input-search',
  codeExample: `<app-screen-list-input-search [screenListInputSearch]="screenListInputSearch" (screenListInputSearchEventEmitter)="ScreenListInputSearch($event)">
  </app-screen-list-input-search>`,
  codeExample1: `<app-screen-list-input-search [screenListInputSearch]="screenListInputSearch"
  (screenListInputSearchEventEmitter)="onSearBoxKeydown($event)"></app-screen-list-input-search>`,
};
export const SCREENLISTGUIDETABLE: ScreenListGuideTable = {
  codeObjectName: 'newDataSource',
  codeObjectName1: 'cols',
  codeTagName: 'app-screen-list-table',
  codeExample: `<app-screen-list-table [cols]="cols" [newDataSource]="newDataSource" [inputFilterList]="noiDungTimKiem" (onAction)="onActionHandler($event)"></app-screen-list-table>`,
  codeExampleFull: `
  <app-screen-list-table [cols]="cols" [newDataSource]="dataSource" [inputFilterList]="noiDungTimKiem"
    [totalItems]="length" [pageSize]="pageSize" [pageSizeOptions]="[countCurrent, 100, 200, 500, 1000]"
    (onAction)="onActionHandler($event)">
  </app-screen-list-table>
  `,
  codeExampleFile: `
  noiDungTimKiem!: string;
  cols!: TableReuseableColumns[];
  tableReuse!: TableReuseableConfig;
  newDataSource!: MatTableDataSource<THUOC>;
  ngOnInit(): void {
    this.getDataLoadingFirstTime();
    this.screenListInputSearch = {
      title: 'Tìm thuốc tân dược theo tên thuốc',
      placeholder: 'Lọc từ khóa'
    };

    this.cols = [
      { key: 'TEN_THUOC', display: 'Tên Thuốc', config: { isSticky: true } },
      { key: 'SO_DANG_KY', display: 'Số đăng ký' },
      { key: 'MA_HOAT_CHAT', display: 'Mã hoạt chất' },
      { key: 'HOAT_CHAT', display: 'Hoạt chất' },
      { key: 'MA_DUONG_DUNG', display: 'Mã đường dùng' },
      { key: 'HAM_LUONG', display: 'Hàm lượng' },
      { key: 'DONG_GOI', display: 'Đóng gói' },
      {
        key: 'star', display: '', matSortHeader: { turnoff: true }, config: {
          isStickyEnd: true, isAction: true,
          actions: [EDITING, DELETING]
        }
      },
    ];
    this.tableReuse = new TableReuseableConfig(this.cols, PeriodicElementData);
    this.newDataSource = new MatTableDataSource(this.tableReuse.ELEMENT_DATA);
  }`,
  codeExampleFile2: `ngOnInit(): void {
    this.screenListTable = SCREENLISTTABLE;
   }`,
  codeFileName: 'thuoc-tan-duoc.component.ts',
  codeObjectEventName: 'onActionHandler',
  codeExampleFile3: `onActionHandler(event: ActionsElement): void {
    switch (event.action.id) {
      case ACTIONSEVENTID.EDITING:
        this.suaBanGhi(event.elementdata);
        break;
      case ACTIONSEVENTID.DELETING:
        this.xoaBanGhi(event.elementdata);
        break;

      default:
        break;
    }
  }`,
  mucluc: [
    {
      filename: 'screen-list-table.component.ts',
      name: 'vẽ overflow theo page_size paginator @Input của table design',
      description: `
      ngOnChanges(changes: SimpleChanges): void {
        /* vẽ overflow theo page_size paginator @Input của table design*/
        const pageEvent: any = changes.pageEvent;
        if (pageEvent && pageEvent.currentValue) {
          this.pageEvent = pageEvent.currentValue;
          if (this.matCardTable) {
            const matCardTable = this.matCardTable.nativeElement;
            const classes = matCardTable.classList;
            if (this.pageEvent.pageSize > 20) {
              classes.add('mat-card-table-turnon-overflow');
            } else {
              classes.remove('mat-card-table-turnon-overflow');
            }
          }
        }
      }
      `
    }
  ]
};
