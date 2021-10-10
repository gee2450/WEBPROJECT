import React from 'react';

function TodoHead( {children} ) {
  return (
    <div id='todoHead'>
      <>
        <h1 id='date'>2021년 9월 5일</h1>
        <span style={{color: 'var(--color-black)'}}>일요일</span>
        <br/><br/><br/>
        <b style={{color: 'var(--color-turquoise)'}}>할일 2개 남음</b><br/>
      </>
      {children}
    </div>
  );
}

export default TodoHead;