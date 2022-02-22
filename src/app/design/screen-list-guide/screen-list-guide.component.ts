import { Component, Input, OnInit } from '@angular/core';
import {
  ScreenListGuide, ScreenListGuideButton, ScreenListGuideInputSearch,
  ScreenListGuideSelection, ScreenListGuideTable, ScreenListGuideToggle
} from './screen-list-guide.interface';

@Component({
  selector: 'app-screen-list-guide',
  templateUrl: './screen-list-guide.component.html',
  styleUrls: ['./screen-list-guide.component.scss']
})
export class ScreenListGuideComponent implements OnInit {
  step = 0;

  @Input() screenListGuideButton!: ScreenListGuideButton;
  @Input() screenListGuideSelection!: ScreenListGuideSelection;
  @Input() screenListGuideToggle!: ScreenListGuideToggle;
  @Input() screenListGuideInputSearch!: ScreenListGuideInputSearch;
  @Input() screenListGuideTable!: ScreenListGuideTable;
  screenlistguide!: ScreenListGuide;
  constructor() { }

  ngOnInit(): void {
    if (!this.screenlistguide) {
      this.screenlistguide = {
        button: this.screenListGuideButton,
        selection: this.screenListGuideSelection,
        toggle: this.screenListGuideToggle,
        inputSearch: this.screenListGuideInputSearch,
        table: this.screenListGuideTable,
      };
    }
  }
  setStep(index: number): void {
    this.step = index;
  }

  nextStep(): void {
    this.step++;
  }

  prevStep(): void {
    this.step--;
  }
}
