import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { actions, types } from "./index";

function* loadDataWorker() {
  const requestConfig = {
    url: "https://jsonplaceholder.typicode.com/todos/1",
    method: "GET",
  };

  try {
    const response = yield call(axios, requestConfig);
    yield put(actions.loadDataSuccess(response.data));
  } catch (err) {
    throw new Error(err.message);
  }
}

function* loadDataWatch() {
  yield takeLatest(types.DATA_LOAD, loadDataWorker);
}

function* saga() {
  yield all([loadDataWatch()]);
}

export default saga;
