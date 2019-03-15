/*
It should ...

It should have a function to display todos.
It should have a function to add new todos.
It should have a function to change a todo.
It should have a function to delete a todo.

*/

// Display using console.log etc.

let todos = ["item1", "item2", "item3"];

// It should have a function to display todos.
function displayTodos() {
  console.log("My Todos: ", todos);
}

// It should have a function to add new todos.
function addTodo(todo) {
  todos.push(todo);
  displayTodos();
}

// It should have a function to change a todo.
function changeTodo(position, newValue) {
  todos[position] = newValue;
  displayTodos();
}

// It should have a function to delete a todo.
function deleteTodo(position) {
  todos.splice(position, 1);
  displayTodos();
}

changeTodo(0, "changed!");
addTodo("Take Crick Karaoke-ing");
deleteTodo(1);

// Add a todo todos.push("item4");

// Change a Todo todos[0] = "Item 1 updated";

// Delete a todo todos.splice(0, 1);
