import React, { memo, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import { useTodoDispatch, useTodoNextId } from '../context/TodoContext';

const DeleteBtn = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  color: #bbb;
  font-size: 24px;
  
  &:hover {
    color: #ff6b6b;
  }
`;

const Checkbox  = styled.span`
  position: relative;
  display: flex;
  width: 30px;
  height: 30px;
  font-size: 22px;
  border-radius: 100%;
  border: 1px solid #999;
  line-height: 40px;
  align-items: center;
  justify-content: center;
  color: #999;
  overflow: hidden;

  ${props => 
    props.done && css`
      background: #3aa9ff;
      color: #fff;
      border-color: #3aa9ff; `
  }

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
`;

const Label = styled.label`
  flex: 1;
  padding-left: 20px;
  ${props => 
    props.done && css `
    color: #bbb;
    text-decoration: line-through;
    `
  }
`;

const TodoItemList = styled.li`
  position: relative;
  height: 32px;
  display: flex;
  align-items:center;
  margin-bottom: 30px;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover ${DeleteBtn} {
    display: flex;
  }
`;

const TodoItem = memo( ({ id, done, text } ) => {
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();
  const onChange = useCallback(() => dispatch({ type: 'TOGGLE', id}), []);
  const onRemove = useCallback(() => {
    dispatch({ type: 'REMOVE', id});
    nextId.current--;
  },
  []);

  return (
    <>
      <TodoItemList>
        <Checkbox done={done}>
          {done && <MdDone />}
          <input id={`todo${id}`} type="checkbox" onChange={onChange} />
        </Checkbox>
        <Label htmlFor={`todo${id}`} done={done}>{text}</Label>
        <DeleteBtn onClick={onRemove}><MdDelete /></DeleteBtn>
      </TodoItemList>
    </>
  )

});

export default TodoItem;