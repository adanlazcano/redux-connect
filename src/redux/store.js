import { createStore } from "redux";
import reducer from "redux/cart/reducer";
// import { combineReducers,createStore } from "redux";
// import userReducer from 'redux/cart/reducer';
// import commentsReducer from 'redux/comments/reducer'

// const reducer = combineReducers({
//      users:userReducer,
//      comments:commentsReducer

// })

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
