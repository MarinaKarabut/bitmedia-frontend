import { createAction } from "@reduxjs/toolkit"

export const getAllUsersRequest = createAction("users/getAllUsersRequest")
export const getAllUsersSuccess = createAction("users/getAllUsersSuccess")
export const getAllUsersError = createAction("users/getAllUsersError")

export const getOneUserRequest = createAction("users/getOneUserRequest")
export const getOneUserSuccess = createAction("users/getOneUserSuccess")
export const getOneUserError = createAction("users/getOneUserError")

const actions = {
  getAllUsersRequest,
  getAllUsersSuccess,
  getAllUsersError,
  getOneUserRequest,
  getOneUserSuccess,
  getOneUserError,
}

export default actions
