import { ScreenListResizeDectectionComponent } from './screen-list-resize-dectection/screen-list-resize-dectection.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { ScreenListButtonComponent } from './screen-list-button/screen-list-button.component';
import { ScreenListGuideComponent } from './screen-list-guide/screen-list-guide.component';
import { TableReuseableComponent } from './screen-list-table-reuseable-guide/table-reuseable.component';
import { ScreenListTableComponent } from './screen-list-table/screen-list-table.component';
import { SizeDetectorComponent } from './screen-list-resize-dectection/size-detector.component';

@NgModule({
  declarations: [
    ScreenListTableComponent,
    ScreenListButtonComponent,
    ScreenListGuideComponent,
    TableReuseableComponent,
    ScreenListResizeDectectionComponent,
    SizeDetectorComponent
  ],
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
  ],
  exports: [
    ScreenListTableComponent,
    ScreenListButtonComponent,
    ScreenListGuideComponent,
    TableReuseableComponent,
    ScreenListResizeDectectionComponent,
    SizeDetectorComponent
  ]
})
export class DesignModule { }
