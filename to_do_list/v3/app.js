/*
It should ...

It should store the todos array on an object.
It should have a displayTodos method.
It should have an addTodos method.
It should have a changeTodo method.
It should have a deleteTodo method.

*/

let todoList = {
  todos: ["item1", "item2", "item3"],
  displayTodos: function() {
    console.log("My Todos ", this.todos);
  },
  addTodo: function(todo) {
    this.todos.push(todo);
    this.displayTodos();
  },
  changeTodo: function(position, newValue) {
    this.todos[position] = newValue;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  }
};
