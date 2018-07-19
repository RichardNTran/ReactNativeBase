import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAIL,
} from 'constants/homeConstant';

const initialState = {
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false,
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        data: [],
        isFetching: true,
      };
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data,
      };
    case FETCHING_DATA_FAIL:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
}
