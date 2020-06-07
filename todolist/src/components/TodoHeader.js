import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../context/TodoContext';

const TodoHeaderDiv = styled.div`
  padding: 30px 40px 20px;

  h1 {
    font-weight: 100;
    font-size: 30px;

    .year {
      display: block;
      font-size: 25px;
    }
  }

  .task {
    font-weight: 100;
    text-align:right;
    font-size: 70px;
    color: #bbb;

    span {
      color: #3aa9ff;
    }
  }
`;

const getToday = () => {
  const date = new Date();

  return {
    yyyy: date.getFullYear(),
    mm: ('0'+(date.getMonth() + 1)).slice(-2),
    dd: ('0'+ date.getDay()).slice(-2),
    day: date.toLocaleDateString('ko-KR', {weekday: 'short'})
  }
}

const TodoHeader = () => {
  const todos = useTodoState();
  const today = getToday();

  return (
    <>
      <TodoHeaderDiv>
        <h1><span className="year">{today.yyyy}</span> {today.mm}.{today.dd}({today.day})</h1>
        <p className="task">
          <span>{todos.filter(todo => todo.done).length}</span>/
          {todos.length}
        </p>
      </TodoHeaderDiv>
    </>
  )

}

export default TodoHeader;