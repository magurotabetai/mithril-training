import m from "mithril";
import stream from "mithril/stream";

const Todo = {
  newTodo: stream(""),
  todos: [],
  addTodo: () => {
    Todo.todos.push({
      title: Todo.newTodo(),
      id: Todo.todos.length + 1
    });
    Todo.newTodo("");
  },
  removeTodo: targetId => {
    Todo.todos = Todo.todos.filter(todo => todo.id !== targetId);
  }
};

module.exports = Todo;
