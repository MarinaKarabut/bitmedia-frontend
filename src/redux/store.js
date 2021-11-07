import { configureStore } from "@reduxjs/toolkit"

import usersReducer from "./users/users-reducer"

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
})

export default store
