import todos from '../models/todoModel.js';


export function createTodo (value) {

  todos.push({
    value: value
  });
}

export function getTodos () {
  return todos;
}