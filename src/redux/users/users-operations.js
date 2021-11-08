import axios from "axios"

import {
  getAllUsersRequest,
  getAllUsersSuccess,
  getAllUsersError,
  getOneUserRequest,
  getOneUserSuccess,
  getOneUserError,
} from "./users-actions"

axios.defaults.baseURL = "https://bitmedia-backend.herokuapp.com/api/v1"

export const getAllUsers = (page) => async (dispatch) => {
  dispatch(getAllUsersRequest())

  try {
    const { data } = await axios.get(`/users?limit=50&page=${page}`)
    dispatch(getAllUsersSuccess(data))
  } catch (error) {
    dispatch(getAllUsersError(error.message))
  }
}

export const getOneUser = (id, start, end) => async (dispatch) => {
  dispatch(getOneUserRequest())

  try {
    const { data } = await axios.get(`/stats/${id}?start=${start}&end=${end}`)

    dispatch(getOneUserSuccess(data))
  } catch (error) {
    dispatch(getOneUserError(error.message))
  }
}
