import React from 'react';
import ToDoItem from './ToDoItem';

const ToDosContainer = props => {
  const data = props.items;

  const todoItems = data.map(el => {
    return <ToDoItem key={el.id} text={el.text} status={el.status}></ToDoItem>;
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
};

export default ToDosContainer;
