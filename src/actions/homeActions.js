import { FETCHING_DATA } from 'constants/homeConstant';

export function fetchData() {
  return {
    type: FETCHING_DATA,
  };
}
