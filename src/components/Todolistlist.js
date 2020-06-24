import React from 'react';
import styled from 'styled-components';
import Todolistitems from './Todolistitems';
import { useTodostate } from '../TodoContext';

const ListBlock = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px 30px;
  padding-bottom: 48px;

  div {
  }
`;

function Todolistlist() {
  const todos = useTodostate();
  return (
    <ListBlock>
      {todos.map((todos) => (
        <Todolistitems
          text={todos.text}
          done={todos.done}
          key={todos.id}
          id={todos.id}
        />
      ))}
    </ListBlock>
  );
}

export default Todolistlist;
