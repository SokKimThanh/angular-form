import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { MatSelectFilterModule } from "mat-select-filter";
import { ClipboardModule } from "ngx-clipboard";
import { MaterialModule } from "../material/material.module";
import { FilterOnMatOptionComponent } from "./filter-on-mat-option/filter-on-mat-option.component";
import { OverlayEffectTableComponent } from "./overlay-effect-table/overlay-effect-table.component";
import { OverlayEffectComponent } from "./overlay-effect/overlay-effect.component";




@NgModule({
  declarations: [
    FilterOnMatOptionComponent,
    OverlayEffectComponent,
    OverlayEffectTableComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forChild([
      { path: 'publish', component: FilterOnMatOptionComponent },
    ]),
    MaterialModule,
    MatSelectFilterModule,
    ClipboardModule,
  ]
})
export class PublishOverlayFilterTableModule { }
