import axios from 'axios';

export async function register(payload) {
  return axios.post('/user/register', payload);
}