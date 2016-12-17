import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Todo, TodoService } from './todo.service';

@Component({
  template: `
    <h2>TODO New</h2>
  `
})

export class TodosNewComponent implements OnInit {
  todo: Todo;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: TodoService
  ) {}

  ngOnInit() {
  }

  submit() {
    this.service.saveTodo(this.todo); //FIXME need wait
    this.router.navigate(['/todos']);
  }
}
