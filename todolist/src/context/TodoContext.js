import React, { createContext, useContext, useReducer, useRef } from 'react';

const initialTodos = [
  {
    id: 1,
    text: '프로젝트 생성하기',
    done: true
  },
  {
    id: 2,
    text: '컴포넌트 스타일링하기',
    done: true
  },
  {
    id: 3,
    text: 'Context 만들기',
    done: false
  },
  {
    id: 4,
    text: 'useReducer 이용하기',
    done: false
  },
  {
    id: 5,
    text: '이벤트 바인딩하기',
    done: false
  },
]

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map(todo => todo.id === action.id ? {...todo, done: !todo.done} : todo);
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);
    default: 
      return state;
  }
}

/* createContext */
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();


/* useContext */
export const useTodoState = () => {
  const context = useContext(TodoStateContext);
  if(!context) throw new Error('Cannot find TodoProvider');
  return context;
}
export const useTodoDispatch = () => {
  const context = useContext(TodoDispatchContext);
  if(!context) throw new Error('Cannot find TodoProvider');
  return context;
}
export const useTodoNextId = () => {
  const context = useContext(TodoNextIdContext);
  
  if(!context) throw new Error('Cannot find TodoProvider');
  return context;
}

const TodoProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(reducer, initialTodos);
  const nextId = useRef(initialTodos[initialTodos.length]);

  return (
      <TodoStateContext.Provider value={state}>
        <TodoDispatchContext.Provider value={dispatch}>
          <TodoNextIdContext.Provider value={nextId}>
          { children }
          </TodoNextIdContext.Provider>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
  )
}
export default TodoProvider;