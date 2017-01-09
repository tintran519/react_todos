import React from 'react';
import CreateTodo from './create_todo';
import TodosList from './todos_list';

const todos = [
{
    task: 'Learn React',
    isCompleted: false
},
{

    task: 'eat dinner',
    isCompleted: true
}
]

export default class App extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          todos
      };
  }

  render() {
    return (
        <div>
            <h1>React ToDo List App</h1>
            <CreateTodo />
            <TodosList todos={this.state.todos}/>
        </div>
      );
  }
}
