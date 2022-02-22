import { OverlayEffectTableComponent } from './overlay-effect-table/overlay-effect-table.component';
import { OverlayEffectPaginatorComponent } from './overlay-effect-paginator/overlay-effect-paginator.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PracticeReactiveFormComponent } from './practice-reactive-form.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutocompleteReactiveFormComponent } from './autocomplete-reactive-form/autocomplete-reactive-form.component';
import { MaterialModule } from '../material/material.module';
import { TableReactiveFormComponent } from './table-reactive-form/table-reactive-form.component';
import { FilteringTableComponent } from './filtering-table/filtering-table.component';
import { FilterOnMatOptionComponent } from './filter-on-mat-option/filter-on-mat-option.component';
import { MatSelectFilterModule } from 'mat-select-filter';
import { MatSelectFormComponent } from './mat-select-form/mat-select-form.component';
import { MatSelectCustomComponent } from './mat-select-custom/mat-select-custom.component';
import { ParenthesizePipePipe } from './mat-select-custom/parenthesize-pipe.pipe';
import { FilterProgressBarComponent } from './filter-progress-bar/filter-progress-bar.component';
import { OverlayEffectComponent } from './overlay-effect/overlay-effect.component';
import { DesignModule } from '../design/design.module';
@NgModule({
  declarations: [
    PracticeReactiveFormComponent,
    AutocompleteReactiveFormComponent,
    TableReactiveFormComponent,
    FilteringTableComponent,
    FilterOnMatOptionComponent,
    MatSelectFormComponent,
    MatSelectCustomComponent,
    ParenthesizePipePipe,
    FilterProgressBarComponent,
    OverlayEffectComponent,
    OverlayEffectPaginatorComponent,
    OverlayEffectTableComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: PracticeReactiveFormComponent },
      { path: 'autocomplete-table', component: AutocompleteReactiveFormComponent },
      { path: 'table-reactive-form', component: TableReactiveFormComponent },
      { path: 'filtering-table', component: FilteringTableComponent },
      { path: 'filter-on-mat-option', component: FilterOnMatOptionComponent },
      { path: 'mat-select-form', component: MatSelectFormComponent },
      { path: 'mat-select-custom', component: MatSelectCustomComponent },
      { path: 'filter-progress-bar', component: FilterProgressBarComponent },
      { path: 'overlay-effect', component: OverlayEffectComponent },
      { path: 'overlay-effect-paginator', component: OverlayEffectPaginatorComponent },
      { path: 'overlay-effect-table', component: OverlayEffectTableComponent },
    ]),
    MaterialModule,
    MatSelectFilterModule,
    DesignModule
  ]
})
export class PracticeReactiveFormModule { }
