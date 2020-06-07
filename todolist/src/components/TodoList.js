import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState } from '../context/TodoContext';

const TodoListDiv = styled.div`
  position: relative;
  border-top: 1px solid #ddd;
  padding: 50px 40px 150px;
`;

const TodoList = () => {
  const todos = useTodoState();
  return (
    <>
      <TodoListDiv>
        <ul>
          {todos.map(
            todo => (
            <TodoItem key={`todo${todo.id}`} id={todo.id} done={todo.done} text={todo.text} />
            ))
          }
        </ul>
      </TodoListDiv>
    </>
  )

}

export default TodoList;