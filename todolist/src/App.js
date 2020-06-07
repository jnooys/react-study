import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import TodoTemplete from './components/TodoTemplete';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import TodoProvider from './context/TodoContext';

const WrapStyle = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 80px);
  overflow-y: scroll;
  background: #e9ecef;
  padding: 20px 0 60px;
`;

const App = () => {
  return (
    <>
      <TodoProvider>
        <GlobalStyle />
        <WrapStyle>
          <TodoTemplete>
            <TodoHeader />
            <TodoList />
            <TodoCreate />
          </TodoTemplete>
        </WrapStyle>
      </TodoProvider>

    </>
  );
}

export default App;
