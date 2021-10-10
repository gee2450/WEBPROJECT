import React from 'react';

function TodoItem( {children} ) {
  return (
    <div id="todoItem">
      <div id="checkbox">
        v
      </div>
      <div id="todo">
        {children}
      </div>
    </div>
  )
}

export default TodoItem;