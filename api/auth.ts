import axios from 'axios';
import {BASE_SERVER_URL} from '.';

const auth = axios.create({
  baseURL: `${BASE_SERVER_URL}/auth`,
  withCredentials: true,
});

export const login = async (email: string, password: string) => {
  try {
    return await auth({
      url: '/local',
      method: 'post',
      data: {email, password},
    });
  } catch (err) {
    console.log(err);
  }
};

export const register = async () => {
  try {
    return await auth({
      url: '/',
      method: 'post',
      data: {},
    });
  } catch (err) {
    console.log(err);
  }
};
