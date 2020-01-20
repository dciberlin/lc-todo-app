import React from 'react';
import friend from '../images/friend.png';

const NotFound = () => {
  return (
    <div className="empty-screen">
      <img src={friend}></img>
      <p>Use the form to create a new todo!</p>
    </div>
  );
};

export default NotFound;
