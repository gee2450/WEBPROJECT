import React from 'react';
import logo from './logo.svg';
import './components/Todolist.css'
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import TodoCreate from './components/TodoCreate';

function App() {
  return (
    <>
      <TodoTemplate>
        <TodoHead />
        <TodoList>
          <TodoItem>1</TodoItem>
          <TodoItem>2</TodoItem>
          <TodoItem>3</TodoItem>
          <TodoItem>4</TodoItem>
        </TodoList>
      </TodoTemplate>
      <TodoCreate/>
    </>
  );
}

export default App;