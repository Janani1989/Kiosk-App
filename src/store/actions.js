import * as types from './mutation-types'
import axios from 'axios'

export const getUser = ({commit}) => {
  axios.get('/isauth')
  .then(function (response) {
    console.log('Retrieved user data: ', response.data);
    commit(types.GET_USER, response.data)
  })
  .catch(function (error) {
    console.log(error);
  });
}


export const registerUser = ({commit}, userPayload) => {
  return new Promise((resolve, reject) => {
    fetch(`/users/register`, {
      method: 'POST',
      redirect: 'follow',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userPayload)
    })
    .then(res => {
      resolve(res)
    })
    .then(err => {
      reject(err)
    })
  })
}

export const login = ({commit}) => {
  axios.get('/isauth')
  .then(function (response) {
    commit(types.LOGIN, response.data)
  })
  .catch(function (error) {
    console.log(error);
  });
}

export const logout = ({commit}) => {
  commit(types.LOGOUT)
}



