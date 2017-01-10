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
                createTask={this.createTask.bind(this)}
                todos={this.state.todos} />
            <TodosList
                todos={this.state.todos}
                toggleTask={this.toggleTask.bind(this)}
                saveTask={this.saveTask.bind(this)}
                deleteTask={this.deleteTask.bind(this)} />
        </div>
      );
  }

  toggleTask(task) {
      //.find finds first item in array that matches condition set
      //example below find todo.task that equals task we are passing in parameter(w/e clicked on)
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

  saveTask(oldTask, newTask) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
    foundTodo.task = newTask;
    this.setState({ todos: this.state.todos });
  }

  deleteTask(taskToDelete) {
    _.remove(this.state.todos, todo => todo.task === taskToDelete);
    this.setState({ todos: this.state.todos })
  }
}
