import React from 'react';
import ToDoItem from './ToDoItem';

class ToDosContainer extends React.Component {
  updateItem = item => {
    this.props.updateFromChild(item);
  };

  render() {
    const data = this.props.items;

    const todoItems = data.map(el => {
      return (
        <ToDoItem
          key={el._id}
          data={el}
          handleUpdate={this.updateItem}
        ></ToDoItem>
      );
    });

    return (
      <div className="todos-container">
        {data.length > 0 && (
          <div className="todos">
            <h5>TODOS</h5>
            {todoItems}
          </div>
        )}
      </div>
    );
  }
}

export default ToDosContainer;
