import axios from 'axios';
import Cookie from './CookiesService';

const ApiService = {
  init(baseURL) {
    axios.defaults.baseURL = baseURL;
  },
  setHeader() {
    // Set authentication header if needed
    axios.defaults.headers.common['Authorization'] = `Bearer ${Cookie.fetch('token')}`;
  },
  removeHeader() {
    delete axios.defaults.headers.common['Authorization'];
  },
  get(resource) {
    return axios.get(resource);
  },
  post(resource, data) {
    return axios.post(resource, data,{
       headers : {
          'Authorization' :   `Bearer ${Cookie.fetch('token')}`
       }
    });
  },
  put(resource, data) {
    return axios.put(resource, data);
  },
  delete(resource) {
    return axios.delete(resource);
  },
};

export default ApiService;
