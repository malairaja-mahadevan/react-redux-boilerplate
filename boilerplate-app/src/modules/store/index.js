import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducers";
import rootSaga from "../sagas";

const configureStore = (preloadedState = {}) => {
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;
  const enhancers = composeEnhancers(applyMiddleware(sagaMiddleware));

  const store = createStore(rootReducer, preloadedState, enhancers);

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
