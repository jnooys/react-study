import React from 'react';
import styled from 'styled-components';

const TodoTempleteDiv = styled.div`
  position: relative;
  background: #fff;
  width: 512px;
  height: 768px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  margin: auto;
`;

const TodoTemplete = ({ children } ) => {
  return (
    <>
      <TodoTempleteDiv>
        {children}
      </TodoTempleteDiv>
    </>
  )

}

export default TodoTemplete;