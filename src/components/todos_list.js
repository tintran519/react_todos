import _ from 'lodash';
import React from 'react';
import TodosListHeader from './todos_list_header'
import TodosListItem from './todos_list_item';

export default class TodosList extends React.Component {
  renderItems() {
      const props = _.omit(this.props, 'todos');
    // return _.map(this.props.todos, (todo, i) => <TodosListItem key={i}
    //     {...todo} />);
      return this.props.todos.map((item,i) => <TodosListItem key={i} task={item.task} isCompleted={item.isCompleted} toggleTask={this.props.toggleTask} />)
  }

  render() {
    // console.log(this.props.todos);
    return (
        <table>
            <TodosListHeader />
            <tbody>
                {this.renderItems()}
            </tbody>
        </table>
      );
  }
}
