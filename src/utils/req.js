import axios from 'axios';
import Config from '../config';

const parse = (endpoint, params) => {
  return Config.API.ACCOUNT_API_BASE_URL + Config.API[endpoint]
      .url.replace(/\{(.+?)\}/g, (str) => params[str]);
};

export default function (endpoint, options = { params: null, data: null, isAccountApi: false }) {
  return axios({
    method: Config.API[endpoint].method,
    url: parse(endpoint, options.params, options.isAccountApi),
    headers: Config.API.HEADERS,
    data: options.data
  })
  .then(response => Promise.resolve(response.data))
  .catch((errorResponse) => {
    console.log(errorResponse)
    const status = get(errorResponse, 'response.status', '');
    const error = get(errorResponse, 'response.data', { code: 1, data: null, message: ['Network error!'] });
    return Promise.reject({ status, ...error });
  });
}
