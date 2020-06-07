import React, { useState, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useTodoDispatch, useTodoNextId } from '../context/TodoContext';

const TodoCreateDiv = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const TodoForm = styled.div`
  position: relative;
  padding: 0 40px 80px;

  input {
    display: block;
    width: 100%;
    height: 40px;
    border-radius: 0;
    border: 0 none;
    border-bottom: 1px solid #000;
    padding-bottom: 10px;

    &::placeholder {
      color: #bbb;
      font-weight: 100;
    }
  }
`;

const CreateBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position:absolute;
  width: 80px;
  height: 80px;
  border-radius: 100%;
  background: #3aa9ff;
  color: #fff;
  font-size: 70px;
  bottom: -40px;
  left: 50%;
  margin-left: -40px;
  transition: transform 150ms ease;

  &:hover {
    background: #3a99ff;
  }

  ${props => props.toggle && css`
    background: #ff6b6b;
    transform:rotate(45deg);

    &:hover {
      background-color: #ff6363;
    }
  `
  }
`;

const TodoCreate = () => {
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState('');
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();
  const clickToggle = useCallback(() => setToggle(!toggle), [toggle]);
  const onChange = useCallback(e => setValue(e.target.value), []);
  const onSubmit = useCallback((e) => {
    e.preventDefault();
    dispatch({type: 'CREATE', todo : {
      id: nextId.current,
      text: value,
      done: false
    }});
    setValue('');
    setToggle(toggle => !toggle);
    nextId.current++;
  }, []);

  return (
    <>
      <TodoCreateDiv>
        {toggle && 
          <TodoForm>
            <form onSubmit={onSubmit} >
              <input type="text" placeholder="Enter new task" autoFocus value={value} onChange={onChange}/>
            </form>
          </TodoForm>
        } 
        <CreateBtn toggle={toggle} onClick={clickToggle}><MdAdd /></CreateBtn>
      </TodoCreateDiv>
    </>
  )

}

export default TodoCreate;