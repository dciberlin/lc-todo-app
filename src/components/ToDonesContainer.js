import React from 'react';
import ToDoItem from './ToDoItem';

class ToDonesContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  updateItem = id => {
    this.props.updateFromChild(id);
  };

  render() {
    const data = this.props.items;

    const todoneItems = data.map(el => {
      return (
        <ToDoItem
          key={el.id}
          data={el}
          handleUpdate={this.updateItem}
        ></ToDoItem>
      );
    });

    return (
      <div className="todones-container">
        {data.length > 0 && (
          <div className="todones">
            <h5>BACKLOG</h5>
            {todoneItems}
          </div>
        )}
      </div>
    );
  }
}

export default ToDonesContainer;
