import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth'
import { DashboardRoutes } from '../dashboard/routes/DashboardRoutes'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='login' element={<LoginPage/>}/>
      <Route path='/*' element={<DashboardRoutes/>}/>
    </Routes>
  )
}
