import axios from 'axios';

const config = {
  baseURL: 'http://jsonplaceholder.typicode.com//',
};

const testApi = axios.create(config);

export { testApi };
