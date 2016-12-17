import { Injectable } from '@angular/core';

export class Todo {
  constructor(public id: number, public title: string, public body: string) {}
}

let TODOS = [
  new Todo(1, '買い物', "とうふ"),
  new Todo(2, '旅行先リスト', "台湾\nタイ\nカンボジア"),
];

let todosPromise = Promise.resolve(TODOS);

@Injectable()
export class TodoService {
  getTodos() {
    return todosPromise;
  }

  getTodo(id: number) {
    return todosPromise.then(todos => todos.find(todo => todo.id === id));
  }

  saveTodo(todo: Todo) {

  }
}
