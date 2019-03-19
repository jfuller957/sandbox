/*
It should ...
.displayTodos should show .todoText property
.displayTodos should tell you if .todos is empty
.displayTodos should show .completed
*/

let todoList = {
  todos: [],
  displayTodos: function() {
    console.log("My Todos; ");
    for(let i = 0; i < this.todos.length, i++) {
      this.todos[i].todoText;
    }
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },

  toggleCompleted: function(position) {
    let todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  }
};
