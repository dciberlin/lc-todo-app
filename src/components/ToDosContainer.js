import React from 'react';
import ToDoItem from './ToDoItem';

function ToDosContainer() {
  const data = [
    { text: 'Do your thing', status: false, id: 1407892 },
    { text: 'Be yourself', status: false, id: 1467892 },
    { text: 'Explain something', status: false, id: 5436436 },
    { text: 'Be a dog', status: false, id: 4363434 }
  ];

  const todoItems = data.map(el => {
    return <ToDoItem key={el.id}></ToDoItem>;
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

export default ToDosContainer;
