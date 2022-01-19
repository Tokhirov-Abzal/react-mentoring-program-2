import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import movieReducer from "./reducer";
import thunk from "redux-thunk";
const store = createStore(
  movieReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
