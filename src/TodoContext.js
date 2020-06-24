import React, { useReducer, createContext, useContext, useRef } from 'react';

const initdata = [
  {
    id: 1,
    text: '1번할일',
    done: true,
  },
  {
    id: 2,
    text: '2번할일',
    done: true,
  },
  {
    id: 3,
    text: '3번할일',
    done: true,
  },
  {
    id: 4,
    text: '4번할일',
    done: false,
  },
];

function todoReducer(state, action) {
  switch (action.type) {
    case 'Create':
      return state.concat(action.todo);
    case 'Toggle':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo,
      );
    case 'Remove':
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error('unhandle action');
  }
}

const TodostateContext = createContext();
const TododipatchConstext = createContext();
const Todonextid = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initdata);
  const nextid = useRef(5);
  return (
    <TodostateContext.Provider value={state}>
      <TododipatchConstext.Provider value={dispatch}>
        <Todonextid.Provider value={nextid}>{children}</Todonextid.Provider>
      </TododipatchConstext.Provider>
    </TodostateContext.Provider>
  );
}

export function useTodostate() {
  const context = useContext(TodostateContext);
  if (!context) {
    throw new Error("can't find TodoProvider");
  }
  return context;
}

export function useTododispatch() {
  const context = useContext(TododipatchConstext);
  if (!context) {
    throw new Error("can't find TodoProvider");
  }
  return context;
}

export function useTodonextid() {
  const context = useContext(Todonextid);

  if (!context) {
    throw new Error("can't find TodoProvider");
  }
  return context;
}
