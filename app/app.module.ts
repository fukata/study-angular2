import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './error.component';
import { HomeComponent } from './home.component';
import { MemoListComponent } from './memo/list.component';
import { MemoNewComponent } from './memo/new.component';
import { MemoShowComponent } from './memo/show.component';

const appRoutes: Routes = [
  { path: 'memo', component: MemoListComponent },
  { path: 'memo/new', component: MemoNewComponent },
  { path: 'memo/:id', component: MemoShowComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    AppComponent,
    MemoListComponent,
    MemoNewComponent,
    MemoShowComponent,
    HomeComponent,
    PageNotFoundComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
