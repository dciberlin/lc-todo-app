import React from 'react';

const ToDoItem = props => {
  return (
    <div className="item">
      <p>{props.data.text}</p>
      <button className="btn">{props.data.status ? '☑' : '☐'}</button>
    </div>
  );
};

export default ToDoItem;
