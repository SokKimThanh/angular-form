import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PracticeReactiveFormModule } from './practice-reactive-form/practice-reactive-form.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectFilterModule } from 'mat-select-filter';
import { DesignModule } from './design/design.module';

export const ROUTES: Routes = [
  { path: '', loadChildren: () => import('./practice-reactive-form/practice-reactive-form.module').then(m => m.PracticeReactiveFormModule) }
]
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    PracticeReactiveFormModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    MatSelectFilterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
