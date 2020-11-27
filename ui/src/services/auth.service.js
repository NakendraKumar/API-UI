import axios from 'axios';
import authHeader from './auth-header';

export const API_URL = 'http://localhost:4000/';

export const register = (name, email, password) => {
  return axios.post(API_URL + 'register', {
    name,
    email,
    password,
  });
};

export const login = (email, password) => {
  return axios
    .post(API_URL + 'login', {
      email,
      password,
    })
    .then(response => {
      if (response.data?.tokens?.access?.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }

      return response.data;
    });
};

export const logout = history => {
  const user = JSON.parse(localStorage.getItem('user'));
  const refreshToken = user.tokens.refresh.token;
  return axios
    .post(
      API_URL + 'v1/auth/logout',
      { refreshToken },
      {
        headers: authHeader(),
      },
    )
    .then(response => {
      localStorage.clear();
      if (response) {
        localStorage.clear();
      }
    });
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};
