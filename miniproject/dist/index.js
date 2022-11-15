"use strict";
// btn.addEventListener('click', function () {
//     alert(input.value)
//     input.value = ''
// });
// not null assertion  !!!!!!!! exclamation point
// type assertions
// let mystery: unknown = 'Hello World!!!';
// const numChars = (mystery as string).length
// type assertions manipulate dom
// type assertions as as as as as
const btn = document.getElementById('btn'); // or pre btn variable like: <HTMLButtonElement>btn
// type assertions as as as as as
const input = document.getElementById('todoinput');
const form = document.querySelector('form');
const list = document.getElementById('todolist');
const todos = readTodos();
// shorter version of using
//! todos.forEach(element => createTodo(element))
todos.forEach(createTodo);
function readTodos() {
    const todosJSON = localStorage.getItem('todos');
    //   need to use type narrowing
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
}
// to work with events if it separate function and it doesn't know what the e is...
function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false,
    };
    createTodo(newTodo);
    todos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(todos));
    input.value = '';
}
function createTodo(todo) {
    const newLI = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    newLI.append(todo.text);
    newLI.append(checkbox);
    list.append(newLI);
}
form.addEventListener('submit', handleSubmit);
