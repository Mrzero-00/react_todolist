import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useTododispatch, useTodonextid } from '../TodoContext';

const CreateBtn = styled.div`
  background: #38d9a9;

  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;

  left: 50%;
  bottom: 0;
  &:hover {
    background: #63e6be;
  }

  &:active {
    background: #207997;
  }
  transform: translate(-50%, 50%);

  z-index: 5;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 60px;
  color: #fff;

  border: none;
  outline: none;
  transition: 0.15s all ease-in;

  ${(props) =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const Inputform = styled.div`
  width: 100%;
  left: 0;
  bottom: 0;
  position: absolute;
`;

const Inputformarea = styled.form`
  padding: 32px;
  background-color: #f8f9fa;
  padding-bottom: 72px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

function TodoCreate() {
  const [open, setopen] = useState(false);
  const newtodo = useTododispatch();
  const nextid = useTodonextid();
  const [todotext, settodotext] = useState('');

  const Inputer = (e) => {
    settodotext(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    const newtodotext = {
      id: nextid.current,
      text: todotext,
      done: false,
    };
    newtodo({
      type: 'Create',
      todo: newtodotext,
    });
    nextid.current += 1;
    settodotext('');
  };

  const onToggle = () => {
    setopen(!open);
  };

  return (
    <>
      {open && (
        <Inputform>
          <Inputformarea onSubmit={submit}>
            <Input
              onChange={Inputer}
              placeholder="할일을 입력후 Enter를 눌르세요"
              autoFocus
              value={todotext}
            />
          </Inputformarea>
        </Inputform>
      )}
      <CreateBtn onClick={onToggle} open={open}>
        <MdAdd />
      </CreateBtn>
    </>
  );
}

export default TodoCreate;
