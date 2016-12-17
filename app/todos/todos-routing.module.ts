import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodosListComponent }   from './todos-list.component';
import { TodosNewComponent }    from './todos-new.component';
import { TodosShowComponent }   from './todos-show.component';

const todosRoutes: Routes = [
  { path: 'todos',  component: TodosListComponent },
  { path: 'todos/new', component: TodosNewComponent }
  { path: 'todos/:id', component: TodosShowComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(todosRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TodosRoutingModule { }
