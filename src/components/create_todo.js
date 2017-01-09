import React from 'react';

export default class TodosList extends React.Component {
  render() {
    // console.log(this.props.todos);
    return (
        <form onSubmit={this.handleCreate.bind(this)}>
            <input type="text" placeholder="Next task" ref="createInput" />
            <button>Create</button>
        </form>
      );
  }

  handleCreate(event) {
    //prevent default prevents page refresh which is default behavior of onSubmit
    event.preventDefault();
    console.log(this.refs.createInput.value);
    console.log(this.props.createTask);
    this.props.createTask(this.refs.createInput.value);
    this.refs.createInput.value = '';
  }
}
