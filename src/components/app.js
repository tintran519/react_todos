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
            <CreateTodo
                //binds 'this' b/c we want 'this' to refer to this component
                createTask={this.createTask.bind(this)} />
            <TodosList
                todos={this.state.todos}
                toggleTask={this.toggleTask.bind(this)} />
        </div>
      );
  }

  toggleTask(task) {
      const foundTodo = _.find(this.state.todos, todo => todo.task === task);
      foundTodo.isCompleted = !foundTodo.isCompleted;
      this.setState({ todos: this.state.todos })
  }

  createTask(task) {
      this.state.todos.push({
          task: task,
          isCompleted: false
      })
      this.setState({ todos: this.state.todos })
  }
}
