import React from 'react';

const ToDoItem = props => {
  function updateItem(e) {
    e.preventDefault();
    const item = props.data;
    props.handleUpdate(item);
  }

  return (
    <div className="item">
      <p>{props.data.text}</p>
      <button className="btn" onClick={updateItem}>
        {props.data.status ? '☑' : '☐'}
      </button>
    </div>
  );
};

export default ToDoItem;
