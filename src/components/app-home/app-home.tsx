import {Component} from '@stencil/core';


@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {


  render() {
    return (
      <div class='app-home'>
        <h1>Home</h1>
        <a href="/todo-list">To do List</a>
      </div>
    );
  }
}
