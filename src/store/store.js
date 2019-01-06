import { createStore, applyMiddleware, compose } from "redux";
import FormReducer from "../reducers/formReducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  FormReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
