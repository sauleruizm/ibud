import { Route, Routes } from "react-router-dom"
import { DashboardPage } from "../pages"
import {
  Container,
  NavBar,
  Main,
  SideBar,
  Footer,
} from '../../layouts/FlexLayout'



export const DashboardRoutes = () => {
  return (
    <>
      <Container>
        <NavBar>NavBar</NavBar>
        <Main>
          <Routes>
            <Route path="dashboard" element={<DashboardPage/>} />
          </Routes>
        </Main>
        <SideBar>SideBar</SideBar>

       <Footer>Footer</Footer>
     </Container>
      
    </>
  )
}
