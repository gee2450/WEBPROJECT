import React from 'react';

function TodoList( {children} ) {
  return (
    <div id="todoList">
      {children}
    </div>
  );
}

export default TodoList;