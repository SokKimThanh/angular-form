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



@NgModule({
  declarations: [
    PracticeReactiveFormComponent,
    AutocompleteReactiveFormComponent,
    TableReactiveFormComponent,
    FilteringTableComponent,
    FilterOnMatOptionComponent,
    MatSelectFormComponent,
    MatSelectCustomComponent,
    ParenthesizePipePipe
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
      { path: 'filter-on-mat-select', component: FilterOnMatOptionComponent },
      { path: 'mat-select-form', component: MatSelectFormComponent },
      { path: 'mat-select-custom', component: MatSelectCustomComponent },
    ]),
    MaterialModule,
    MatSelectFilterModule
  ]
})
export class PracticeReactiveFormModule { }
