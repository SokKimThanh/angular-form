import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ScreenListGuideButton } from '../screen-list-guide/screen-list-guide.interface';
import { SCREENLISTGUIDEBUTTON } from '../screen-list-guide/screen-list-guide.data';
import { ScreenListButton } from './screen-list-button.interface';

@Component({
  selector: 'app-screen-list-button',
  templateUrl: './screen-list-button.component.html',
  styleUrls: ['./screen-list-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ScreenListButtonComponent implements OnInit {
  svgIcon!: string;
  @Input() screenListButton!: ScreenListButton;
  @Output() buttonEventEmitter = new EventEmitter<MouseEvent>();
  screenListGuideButton!: ScreenListGuideButton;
  constructor() { }

  ngOnInit(): void {
    if (!this.screenListButton) {
      this.screenListGuideButton = SCREENLISTGUIDEBUTTON;
      return;
    } else {
      console.log('this.screenListButton', this.screenListButton);
      this.svgIcon = this.screenListButton.svgIcon;
    }
  }
  emit(event: MouseEvent): void {
    this.buttonEventEmitter.emit(event);
  }
}
