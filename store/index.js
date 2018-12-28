import { createStore, applyMiddleware, compose } from "redux";
import { reducer } from "../reducers/";
import thunk from "redux-thunk";

const composeEnhancers =
  (process.env.NODE_ENV !== "production" &&
    typeof window != "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);
