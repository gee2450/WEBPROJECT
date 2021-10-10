import React, { useReducer, useMemo } from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';
import produce from 'immer';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

const initialState = {
  inputs: {
    username: '',
    email: ''
  },
  users: [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]
}

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_USER':
      return produce(state, draft => {
        draft.users.push(action.user);
      });
    case 'REMOVE_USER':
      return produce(state, draft => {
        const index = draft.users.findIndex(user => user.id === action.id);
        draft.users.splice(index, 1);
      });
    case 'TOGGLE_USER':
      return produce(state, draft => {
        const user = draft.users.find(user => user.id === action.id);
        user.active = !user.active;
      });
    default:
      return state;
  }
}

// const UserDispatch = React.createContext(null);
// UserDispatch 라는 이름으로 내보내줍니다.
export const UserDispatch = React.createContext(null);
// export 하면 나중에 다른 파일에서 import UserDispatch로 불러올 수 있음.

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { users } = state;
  console.log(state);

  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <>
      <Wrapper>
        <Hello name="react" color="red" isSpecial />
        <Hello color="pink"/>
        <Counter /><br/>
        <InputSample />
      </Wrapper>
      <UserDispatch.Provider value={dispatch}>
        <CreateUser/>
        <UserList users={users}/>
      </UserDispatch.Provider>
      <div>활성사용자 수 : {count}</div>
    </>
  );
}

export default App;