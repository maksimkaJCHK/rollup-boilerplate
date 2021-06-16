import { put, call, takeLatest, all } from 'redux-saga/effects';
import "regenerator-runtime/runtime";
import ES6Promise  from "es6-promise";
ES6Promise.polyfill();
import Axios  from 'axios';
import { addDog } from '../store/actions';
import { LOAD_DOG } from '../store/const';

function API() {
  return Axios(`${API_URL}`);
}

function* dogLoad() {
  let param = yield call(API);
  yield put(addDog(param.data.message));
}

function* watchDogLoad() {
  yield takeLatest(LOAD_DOG, dogLoad);
}

export default function* dogSaga() {
  yield all([
    watchDogLoad()
  ])
}