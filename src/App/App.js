import { Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"

import Loader from "../shared/components/Loader"
import routes from "./routes"

const MainPage = lazy(() => import("../client/pages/MainPage"))
const UsersPage = lazy(() => import("../client/pages/UsersPage"))
const OneUserPage = lazy(() => import("../client/pages/OneUserPage"))
const NotFoundPage = lazy(() => import("../client/pages/NotFoundPage"))

function App() {
  const { main, users, user } = routes

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={main} exact element={<MainPage />} />
        <Route path={users} exact element={<UsersPage />} />
        <Route path={user} exact element={<OneUserPage />} />
        <Route element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  )
}

export default App
