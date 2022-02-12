import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PracticeReactiveFormComponent } from './practice-reactive-form.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PracticeReactiveFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: PracticeReactiveFormComponent }
    ])
  ]
})
export class PracticeReactiveFormModule { }
