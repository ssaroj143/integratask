import React from "react";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { appDispatcher } from "./middleware/dispatcher.js";

import reducers from "./reducers";
import RootContainer from "./containers/RootContainer";
import ResponsiveContainer from "./containers/ResponsiveContainer";
import "./stylesheets/main.scss";

const store = createStore(reducers, applyMiddleware(thunk, appDispatcher));

export default (props) => {
  return (
    <Provider store={store}>
      <ResponsiveContainer ng="pehtmlflowcharts">
      <RootContainer />
      </ResponsiveContainer>
      
    </Provider>
  );
};
