import { Observable } from 'rxjs/Observable';
import { Component, ngOnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Todo, TodoService } from './todo.service';

@Component({
  template: `
    <h2>TODO</h2>
    <ul class="todos">
      <li class="todo"
          *ngFor="let todo of todos | async"
          (click)="onSelect(todo)">
        <span class="badge">{{todo.id}}</span> {{todo.title}}
      </li>
    </ul>
  `
})

export class TodosListComponent implements OnInit {

  todos: Observable<Todo[]>;

  constructor(
    private service: TodoService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.todos = this.service.getTodos();
  }

  onSelect(todo: Todo) {
    this.router.navigate(['/todos', todo.id]);
  }
}
