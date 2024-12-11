import { createContext, useReducer } from 'react';

// Reducer function
const changeState = (state, action) => {
  const { typ, payload } = action;
  switch (typ) {
    case 'CHANGE_COLOR':
      return { ...state, color: payload };
    default:
      return state;
  }
};

export const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, {
    color: '',
  });

  // Dispatching action inside useEffect to avoid calling it on each render
  const changeColor = (color) => {
    dispatch({ typ: 'CHANGE_COLOR', payload: color });
  };

  return (
    <GlobalContext.Provider value={{ ...state, changeColor }}>
      {children}
    </GlobalContext.Provider>
  );
}
