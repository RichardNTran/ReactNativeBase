import axios from 'axios';
import { get } from 'lodash';
import Config from '../config';

const DEFAULT_CONFIG = {
  baseURL: Config.API.ACCOUNT_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

export const statusCode = {
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

export default class RestClient {
  constructor(config = {}) {
    this.config = Object.assign({}, DEFAULT_CONFIG, config);
  }

  get(url, params, config = {}) {
    return this.executeRequest(url, { ...config, params });
  }

  post(url, data, config = {}) {
    return this.executeRequest(url, { method: 'post', ...config, data });
  }

  executeRequest(url, config) {
    const finalHeaderConfig = { ...this.config.headers, ...config.headers };
    const finalConfig = {
      ...this.config,
      url,
      ...config,
      headers: { ...finalHeaderConfig },
    };
    console.log(finalConfig);
    return axios.request(finalConfig)
      .then(response => Promise.resolve(response.data))
      .catch((errorResponse) => {
        console.log(errorResponse);
        const status = get(errorResponse, 'response.status', '');
        const error = get(
          errorResponse,
          'response.data',
          { code: 1, data: null, message: ['Network error!'] }
        );

        // if (status === statusCode.UNAUTHORIZED) {
        // }

        // if (status === statusCode.INTERNAL_SERVER_ERROR) {
        // }
        const newError = {
          status,
          ...error,
        };
        return Promise.reject(newError);
      });
  }
}
