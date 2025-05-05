import React from "react";
import TodoList from "../components/TodoList";
import { Provider } from "react-redux";
import store from "../store";

const Page1 = () => {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
};

export default Page1;
