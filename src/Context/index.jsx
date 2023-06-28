import { createContext, useReducer, useContext } from 'react';
import { reducer } from './reducer'

const AppContext = createContext();

export function ContextProvider({ children }) {

  const initialState = {
    searchForm: {
      dropOffDate: "",
      dropOffLocation: "",
      pickUpLocation: "",
      pickUpdate: "",
    },
    anythingElse: true,
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const store = { state, dispatch }

  return (
    <AppContext.Provider value={store}>
      {children}
    </AppContext.Provider>
  );
}

export const useSelector = () => {
  const context = useContext(AppContext)

  if (!context) {
    throw new Error(`Cannot use outside contextProvider`);
  }
  return context.state;
}

export const useDispatch = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error(`Cannot use outside contextProvider`);
  }
  return context.dispatch;
};