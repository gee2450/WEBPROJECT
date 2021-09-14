import logo from './logo.svg';
import React from 'react';
import './App.css';
import Youtube_header from './components/Youtube_header';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: #F9F9F9;
  }
`;

function App() {
  return (
    <div className="App">
      <Youtube_header/>
    </div>
  );
}

export default App;
