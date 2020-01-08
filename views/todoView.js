import { createTodo, getTodos } from '../controllers/todoController.js';


const form = document.querySelector('form');

/**
 * get user input to create a todo in the TODOS object
 * 
 * @param {Object} ev - the form event submission
 *
 */

form.addEventListener('submit', function (ev) {
  ev.preventDefault();
  createTodo(form.todo.value);
  displayTodos(getTodos());
});

let todosDOM = document.querySelector('#todos')

function displayTodos (todos) {

  todosDOM.innerHTML = '';

  todos.forEach(function (todo) {
    let createP = document.createElement('p');
    createP.textContent = todo.value;

    todosDOM.appendChild(createP);
  });

}