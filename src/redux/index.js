import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import expenseReducer from "./reducers/expenses";
import filterReducer from "./reducers/filters";
import authReducer from "./reducers/auth";

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expenseReducer,
      filters: filterReducer,
      auth: authReducer,
    }),
    composeWithDevTools(applyMiddleware(thunk))
  );

  return store;
};
