import ReactDOM from 'react-dom'
import React from 'react'
// import reportWebVitals from './reportWebVitals'
// import { Budget } from './Budget'
import {
  Container,
  NavBar,
  Main,
  SideBar,
  ContentBox,
  Content1,
  // Content2,
  // Content3,
  Footer,
} from './Styles/Layouts/FlexLayout'
import { Card } from './Components/Card/Card'
import { FlexContainerStyled } from './Components/FlexContainer/FlexContainerStyled'

ReactDOM.render(
  <React.StrictMode>
    <Container>
      <NavBar>NavBar</NavBar>
      <Main>
        <FlexContainerStyled>
          <Card tittle={'Agregar Gasto'}></Card>
          <Card tittle={'Agregar Monto'}></Card>
          <Card tittle={'Reportes'}></Card>
        </FlexContainerStyled>
      </Main>
      <SideBar>SideBar</SideBar>
      <ContentBox>
        <Content1>Content1</Content1>
        {/* <Content2>Content2</Content2>
        <Content3>Content3</Content3> */}
      </ContentBox>
      <Footer>Footer</Footer>
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(ReactDOM.render)
