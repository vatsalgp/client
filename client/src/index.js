import React from "react";
import ReactDom from "react-dom";
import reduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import App from "./Components/App";
import reducers from "./Reducers";

const store = createStore(reducers, applyMiddleware(reduxThunk));

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector("#root")
);