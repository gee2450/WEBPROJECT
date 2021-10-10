import React, {useEffect, useContext} from 'react';
import { UserDispatch } from './App';

const User = React.memo(function User( {user} ) {
  const dispatch = useContext(UserDispatch);

  useEffect(() => {
    console.log('user 값이 설정됨');
    console.log(user);
    return () => {
      console.log('user 가 바뀌기 전..');
      console.log(user);
    };
  }, [user]);

  return (
    <div>
      <b 
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black'
        }}
        onClick={() => {
          dispatch({ type: 'TOGGLE_USER', id: user.id });
        }}
      >
        {user.username}
      </b>
      &nbsp;
      {/* 위의 코드는 현 위치에서 자동 줄 바꿈(워드랩)을 막는 데 쓰인다. */}
      <span>({user.email})</span>
      <button onClick={() => {
        dispatch({ type: 'REMOVE_USER', id: user.id });
      }}>삭제</button>
    </div>
  );
});

function UserList( {users} ) {
  return (
    <div>
      {users.map( user => (
        <User user={user} key={user.id}/>
      ))}
    </div>
  );
}

export default React.memo(UserList);