import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PracticeReactiveFormModule } from './practice-reactive-form/practice-reactive-form.module';

export const ROUTES: Routes = [
  { path: '', loadChildren: () => import('./practice-reactive-form/practice-reactive-form.module').then(m => m.PracticeReactiveFormModule) }
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    PracticeReactiveFormModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
