import React from 'react';
import styled from 'styled-components';
import { useTodostate } from '../TodoContext';

const HeadBlock = styled.div`
  margin-top: 48px;
  margin-left: 32px;
  margin-right: 32px;
  margin-bottom: 12px;
  border-bottom: 1px solid #e9ecef;

  .current_date {
    font-size: 48px;
    color: #212529;
  }
  .today {
    font-size: 28px;
    color: #adb5bd;
  }
  .count_todo {
    margin-top: 20px;
    font-size: 16px;
    color: #ff6b6b;
    font-weight: 700;
  }
`;

function TodolistHead() {
  const count_todo = useTodostate();
  const today = new Date();
  const currentday = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const dayday = today.toLocaleDateString('ko-KR', {
    weekday: 'long',
  });
  const count = count_todo.filter((todo) => todo.done === true).length;

  return (
    <HeadBlock>
      <h1 className="current-date">{currentday}</h1>
      <div className="today">{dayday}</div>
      <div className="count_todo">할일 {count}개남음</div>
    </HeadBlock>
  );
}

export default TodolistHead;
