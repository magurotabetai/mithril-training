import m from "mithril";
import Header from "./Header";
import Todo from "../models/Todo";

const TodoView = {
  view: () => (
    <div class="container">
      <Header />
      <form
        onsubmit={event => {
          event.preventDefault();
          Todo.addTodo();
        }}
      >
        <input
          type="text"
          class="input"
          oninput={m.withAttr("value", Todo.newTodo)}
          value={Todo.newTodo}
        />
        <button type="submit" class="button">
          add
        </button>
      </form>
      <ul>
        {Todo.todos.map(todo => (
          <p class="field">
            <span class="tag is-warning is-medium">
              {todo.title}
              <button
                class="delete is-small"
                onclick={() => Todo.removeTodo(todo.id)}
              />
            </span>
          </p>
        ))}
      </ul>
    </div>
  )
};

module.exports = TodoView;
