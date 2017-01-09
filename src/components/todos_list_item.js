import React from 'react';

export default class TodosListItem extends React.Component {
  constructor(props) {
    super(props);

    //Generally setStates go into Top Level Component that sets everything
    this.state = {
      isEditing: false
    };
  }

  renderTaskSection() {
    const { task, isCompleted } = this.props;

    const taskStyle = {
      color: isCompleted ? 'green' : 'red',
      cursor: 'pointer'
    }

    return (
        <td style={taskStyle}
            onClick={this.props.toggleTask.bind(this, task)}
        >
          {task}
        </td>
      )
  }

  renderActionSection() {
    if (this.state.isEditing) {
      return (
          <td>
              <button>Save</button>
              <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
          </td>
        );
    }

    return (
        <td>
            <button onClick={this.onEditClick.bind(this)}>Edit</button>
            <button>Delete</button>
        </td>
      );
  }

    //bind maintains 'this' context in this component
  render() {
    return (
          <tr>
              {this.renderTaskSection()}
              {this.renderActionSection()}
          </tr>
      );
  }

  onEditClick() {
    this.setState({ isEditing: true });
  }

  onCancelClick() {
    this.setState({ isEditing: false });
  }

}
