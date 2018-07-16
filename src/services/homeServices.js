// const people = [
//   { name: 'Nader', age: 36 },
//   { name: 'Amanda', age: 24 },
//   { name: 'Jason', age: 44 }
// ];
import RestClient from './RestClient';

export default class HomeServices {
  constructor(restClient = new RestClient()) {
    this.restClient = restClient;
  }

  login(params) {
    return this.restClient.post('login', params, {});
  }
}

// export default () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       return resolve(people);
//     }, 3000);
//   });
// };
