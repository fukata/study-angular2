import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { TodosListComponent }    from './todos-list.component';
import { TodosNewComponent }  from './todos-new.component';
import { TodosShowComponent }  from './todos-show.component';

import { TodoService } from './todo.service';

import { TodosRoutingModule } from './todos-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TodosRoutingModule,
  ],
  declarations: [
    TodosListComponent,
    TodosNewComponent,
    TodosShowComponent,
  ],
  providers: [
    TodoService,
  ]
})
export class TodosModule {}
