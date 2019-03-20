/*
It should ...
toggle all as completed if not, else toggle all incomplete
toggle all that aren't toggled completed if only some are toggled completed
*/

let todoList = {
  todos: [],
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log("You todo list is empty!");
    } else {
      console.log("My Todos; ");
      for (let i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
          console.log("(x)", this.todos[i].todoText);
        } else {
          console.log("( )", this.todos[i].todoText);
        }
      }
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

  toggleAll: function() {
    let totalTodos = this.todos.length;
    let completedTodos = 0;

    // Get number of completed todos.
    for (let i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }

    // Case 1: If everything's true make them all false
    if (completedTodos === totalTodos) {
      // make everything false
      for (let i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    } else {
      // Case 2: Make everything true
      for (let i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }

    this.displayTodos();
  },

  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  }
};
