import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodolistForm from './components/TodolistForm';
import TodolistHead from './components/TodolistHead';
import Todolistlist from './components/Todolistlist';
import TodoCreate from './components/TodoCreate';
import { useTodostate, TodoProvider } from './TodoContext';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }  

`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodolistForm>
        <TodolistHead />
        <Todolistlist />
        <TodoCreate />
      </TodolistForm>
    </TodoProvider>
  );
}

export default App;
