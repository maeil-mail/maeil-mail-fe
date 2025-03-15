import { BASE_URL } from '../constants/baseUrl';
import APIClient from './APIClient';

const mainClient = new APIClient(BASE_URL);

export default mainClient;
