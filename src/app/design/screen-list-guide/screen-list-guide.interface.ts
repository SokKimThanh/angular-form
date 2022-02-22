
export interface MucLuc {
  name: string;
  description: string;
  filename: string;
}
export interface ScreenListGuideButton {
  codeObjectName?: string;
  codeObjectName1?: string;
  codeObjectEvent?: string;
  codeObjectEventName?: string;
  codeExample?: string;
  codeExampleFull?: string;
  codeExample1?: string;
  codeExampleFile?: string;
  codeExampleFile2?: string;
  codeExampleFile3?: string;
  codeFileName?: string;
  codeTagName?: string;
  mucluc?: MucLuc[];
}
export interface ScreenListGuideSelection extends ScreenListGuideButton {
  codeObjectName: string;
  codeTagName: string;
  codeExample: string;
}
export interface ScreenListGuideToggle extends ScreenListGuideButton {
  codeObjectName: string;
  codeTagName: string;
  codeExample: string;
}
export interface ScreenListGuideInputSearch extends ScreenListGuideButton {
  codeObjectName: string;
  codeTagName: string;
  codeExample: string;
}

export interface ScreenListGuideTable extends ScreenListGuideButton {
  codeObjectName: string;
  codeTagName: string;
  codeExample: string;
}
export interface ScreenListGuide {
  button?: ScreenListGuideButton;
  selection?: ScreenListGuideSelection;
  toggle?: ScreenListGuideToggle;
  inputSearch?: ScreenListGuideInputSearch;
  table?: ScreenListGuideTable;
}
