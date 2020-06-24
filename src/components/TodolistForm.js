import React from 'react';
import styled from 'styled-components';

const MainBlock = styled.div`
  width: 512px;
  height: 768px;
  border-radius: 16px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
  background-color: #fff;

  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;

  flex-direction: column;
  position: relative;
`;

function TodolistForm({ children }) {
  return (
    <>
      <MainBlock>{children}</MainBlock>
    </>
  );
}

export default TodolistForm;
