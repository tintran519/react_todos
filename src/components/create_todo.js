import React from 'react';

export default class TodosList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null
    };
  }

  renderError() {
    if (!this.state.error) { return null; }

    return <div style={{ color: 'red' }}>{this.state.error}</div>
  }

  render() {
    // console.log(this.props.todos);
    return (
        <form onSubmit={this.handleCreate.bind(this)}>
            <input type="text" placeholder="Next task" ref="createInput" />
            <button>Create</button>
            {this.renderError()}
        </form>
      );
  }

  handleCreate(event) {
    //prevent default prevents page refresh which is default behavior of onSubmit
    event.preventDefault();

    const createInput = this.refs.createInput;
    const task = createInput.value;
    const validateInput = this.validateInput(task);

    if (validateInput) {
      this.setState({ error: validateInput });
      return;
    }


    this.setState({ error: null });
    // console.log(this.refs.createInput.value);
    // console.log(this.props.createTask);
    this.props.createTask(this.refs.createInput.value);
    this.refs.createInput.value = '';
  }

  //analyze task before adding to list
  validateInput(task) {
    if (!task) {
        return 'Please enter a task.';
    } else if(_.find(this.props.todos, todo => todo.task === task)) {
        return 'Task already exists.';
    } else {
        return null;
    }
  }
}
