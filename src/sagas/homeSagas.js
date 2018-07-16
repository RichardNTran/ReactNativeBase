import { put, takeLatest } from 'redux-saga/effects';
import { homeServices } from 'services';
import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAIL,
} from 'constants/homeConstant';

function* fetchData(action) {
  try {
    console.log(action);
    const data = yield homeServices.login({
      email: 'nguyen.ba.long@framgia.com',
      password: 'Abc#abc1',
    });
    console.log(data);
    yield put({ type: FETCHING_DATA_SUCCESS, data });
  } catch (e) {
    yield put({ type: FETCHING_DATA_FAIL });
  }
}

function* dataSaga() {
  yield takeLatest(FETCHING_DATA, fetchData);
}

export default dataSaga;
