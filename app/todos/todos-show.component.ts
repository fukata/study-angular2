import 'rxjs/add/operator/switchMap';
import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Todo, TodoService } from './todo.service';

@Component({
  template: `
    <h2>TODO Show</h2>
    <div *ngIf="todo">
      <h3>{{todo.title}}</h3>
      <div>
        <label>Id: </label> {{todo.id}}
      </div>
      <div>
        <label>Body: </label>
        <textarea [(ngModel)]="todo.body" rows="10" cols="30"></textarea>
      </div>
      <p>
      	<button (click)="submit()">Submit</button>
      </p>
    </div>
  `
})

export class TodosShowComponent implements OnInit {
  todo: Todo;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: TodoService
  ) {}

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.service.getTodo(+params['id']))
      .subscribe((todo: Todo) => this.todo = todo);
  }

  submit() {
    this.service.saveTodo(this.todo); //FIXME need wait
    this.router.navigate(['/todos']);
  }
}
