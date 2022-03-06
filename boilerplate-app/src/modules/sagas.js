import { all, fork } from "redux-saga/effects";

import applicationSaga from "./application/sagas";

const sagas = [applicationSaga];

function* rootSaga() {
  yield all(sagas.map((saga) => fork(saga)));
}

export default rootSaga;
