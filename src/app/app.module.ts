import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { OverlayFilteringTableModule } from './practice-reactive-form/practice-reactive-form.module';
import { PublishOverlayFilterTableModule } from './publish-overlay-filter-table/publish-overlay-filter-table.module';

export const ROUTES: Routes = [
  { path: '', loadChildren: () => import('./practice-reactive-form/practice-reactive-form.module').then(m => m.OverlayFilteringTableModule) },
  { path: 'publish', loadChildren: () => import('./publish-overlay-filter-table/publish-overlay-filter-table.module').then(m => m.PublishOverlayFilterTableModule) }
]
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayFilteringTableModule,
    PublishOverlayFilterTableModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
