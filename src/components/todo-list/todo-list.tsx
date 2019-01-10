import {Component, State} from '@stencil/core';


@Component({
  tag: 'todo-list',
  styleUrl: 'todo-list.css',
  shadow: true
})
export class TodoList {

  @State() todoList = [{
    name: 'spenciljs',
    completed: false,
  }, {
    name: 'ionic4',
    completed: false,
  }, {
    name: 'pwa',
    completed: false,
  }];
  @State() newTodo = "";

  updateNewTodo = e => {
    this.newTodo = e.target.value
  };

  addTodo = e => {
    e.preventDefault();
    this.todoList = [...this.todoList, {
      name: this.newTodo,
      completed: false,
    }];
    this.newTodo = '';
  };

  toggleDone = index => {
    this.todoList = this.todoList.map((todo, key) => {
      if (key === index) {
        todo['completed'] = !todo['completed'];
      }
      return todo;
    });
  };

  removeTodo = index => {
    const todoList = [...this.todoList];
    todoList.splice(index, 1);
    this.todoList = [...todoList];
  };

  render() {
    return (
      <div class="todo-list">
        <h1>To Do List</h1>
        <form onSubmit={this.addTodo} class="todo-form">
          <label>
            Name:
            <input type="text" onInput={this.updateNewTodo} value={this.newTodo}/>
          </label>
          <button>Add</button>
        </form>
        <ul>
          {this.todoList.map((todo, index) => (
            <li key={index}>
              {todo.name}
              <button onClick={() => this.removeTodo(index)}>Remove</button>
              <button onClick={() => this.toggleDone(index)}>{todo.completed ? 'no done' : 'Done'}</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
