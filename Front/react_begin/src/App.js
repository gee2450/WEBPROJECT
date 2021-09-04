import React, {useRef, useState} from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const {username, email} = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
        ...inputs,
        [name]: value
    })
  }

  const [users, setUsers] = useState([
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
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const user = { 
      id: nextId.current, 
      username: username, 
      email: email
    };
    // setUsers([...users, user]); // users 배열 수정하는 방식
    setUsers(users.concat(user)); // users에 user를 추가하여 복사하는 방식

    setInputs({
      username: '',
      email: ''
    });

    nextId.current += 1;
  }

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  }

  const onToggle = id => {
    setUsers(
      users.map(user =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  }

  return (
    <>
      <Wrapper>
        <Hello name="react" color="red" isSpecial />
        <Hello color="pink"/>
        <Counter /><br/>
        <InputSample />
      </Wrapper>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    </>
  );
}

export default App;