import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import { Provider } from "react-redux";
// import reducer from "redux/users/reducer";
import store from "redux/store";

// redux stuff

// import { createStore } from "redux";

//  const store = createStore(reducer);

function App() {
  // cart setup

  //  store.dispatch({type:DECREASE})
  console.log(store.getState());

  return (
    <Provider store={store}>
      <main>
        <Navbar />
        <CartContainer />
      </main>
    </Provider>
  );
}

export default App;
