import _ from 'lodash';
import React from 'react';
import TodosListHeader from './todos_list_header'
import TodosListItem from './todos_list_item';

export default class TodosList extends React.Component {
  renderItems() {
    //omit searches 1st parameter and leaves out w/e specified in 2nd parameter
      const props = _.omit(this.props, 'todos');
      console.log(props);
     // return _.map(this.props.todos, (todo, i) => <TodosListItem key={i}
    //     {...todo} />);
      return this.props.todos.map((item,i) => <TodosListItem key={i}
        task={item.task} isCompleted={item.isCompleted}
        {...props} />)
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
