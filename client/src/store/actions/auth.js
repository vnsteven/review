import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';

import {
  USER_LOADED,
  AUTH_ERROR,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  SIGNIN_FAIL,
  SIGNIN_SUCCESS,
  LOGOUT
} from './types';

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/auth');

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

export const register = (data, history) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const body = JSON.stringify(data);
    const res = await axios.post('/api/users', body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    })

    dispatch(loadUser());

    history.push('/create')
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL
    })
  }
}