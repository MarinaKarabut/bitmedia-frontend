import { combineReducers } from "redux"
import { createReducer } from "@reduxjs/toolkit"

import {
  getAllUsersRequest,
  getAllUsersSuccess,
  getAllUsersError,
  getOneUserRequest,
  getOneUserSuccess,
  getOneUserError,
} from "./users-actions"

const initialStateUsers = []

const initialStateUser = {}

const initialStateError = null

const users = createReducer(initialStateUsers, {
  [getAllUsersSuccess]: (_, { payload }) => payload.data.result,
})

const user = createReducer(initialStateUser, {
  [getOneUserSuccess]: (_, { payload }) => payload.data,
})

const loading = createReducer(false, {
  [getAllUsersRequest]: () => true,
  [getAllUsersSuccess]: () => false,
  [getAllUsersError]: () => false,

  [getOneUserRequest]: () => true,
  [getOneUserSuccess]: () => false,
  [getOneUserError]: () => false,
})

const error = createReducer(initialStateError, {
  [getAllUsersError]: (_, { payload }) => payload,
  [getAllUsersSuccess]: () => initialStateError,

  [getOneUserError]: (_, { payload }) => payload,
  [getOneUserSuccess]: () => initialStateError,
})

export default combineReducers({
  users,
  user,
  loading,
  error,
})
