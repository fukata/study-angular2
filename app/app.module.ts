import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './error.component';
import { HomeComponent } from './home.component';
import { TodoListComponent } from './todos/todos-list.component';
import { TodoNewComponent } from './todos/todos-new.component';
import { TodoShowComponent } from './todos/todos-show.component';

const routes: Routes = [
  { path: 'todos', component: TodoListComponent },
  { path: 'todos/new', component: TodoNewComponent },
  { path: 'todos/:id', component: TodoShowComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoNewComponent,
    TodoShowComponent,
    HomeComponent,
    PageNotFoundComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
