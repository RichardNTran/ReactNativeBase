import RestClient from './RestClient';
import HomeService from './HomeServices';

const restClient = new RestClient();

export const homeServices = new HomeService(restClient);
