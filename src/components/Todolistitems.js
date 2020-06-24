import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import { useTododispatch } from '../TodoContext';

const CheckIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #ced4da;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${(props) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const TextBlock = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  margin-left: 10px;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

const RemoveIcon = styled.div`
    display:flex;
    align-items:center;
    justify-content :center;
    color:#dee2e6;
    font-size : 24px 
    cursor:pointer;
    opacity: 0;
    transition : 0.3s;
    &:hover{
        color:#ff6b6b;
        transform : scale(1.3);
    }
`;

const ItemListBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${RemoveIcon} {
      opacity: 1;
      cursor: pointer;
    }
  }
`;

function Todolistitems({ id, done, text }) {
  const dispatch = useTododispatch();

  const onToggle = () => {
    dispatch({
      type: 'Toggle',
      id,
    });
  };

  const onRemove = () =>
    dispatch({
      type: 'Remove',
      id,
    });

  return (
    <ItemListBlock>
      <CheckIcon done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckIcon>
      <TextBlock done={done}>{text}</TextBlock>
      <RemoveIcon onClick={onRemove}>
        <MdDelete />
      </RemoveIcon>
    </ItemListBlock>
  );
}

export default Todolistitems;
