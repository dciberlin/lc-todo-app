import React from 'react';

const ToDoItem = props => {
  return (
    <div className="item">
      <p>{props.text}</p>
      <button className="btn">{props.status ? '↻' : '✓'}</button>
    </div>
  );
};

export default ToDoItem;
