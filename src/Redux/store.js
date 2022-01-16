import { createStore, combineReducers, applyMiddleware } from "redux";
import { cardReducer } from "./Card‏/cardReducer";
import thunk from "redux-thunk";

const rediucer = combineReducers({
  moviesCard: cardReducer,
});

const Middleware = [thunk];

const store = createStore(rediucer, applyMiddleware(...Middleware));

export default store;
