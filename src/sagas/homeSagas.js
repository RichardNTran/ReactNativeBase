import { put, takeLatest } from 'redux-saga/effects';
import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
} from 'constants/homeConstants';
import { homeServices } from 'services';

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
    console.log(e);
    yield put({ type: FETCHING_DATA_FAILURE });
  }
}

function* dataSaga() {
  yield takeLatest(FETCHING_DATA, fetchData);
}

export default dataSaga;
