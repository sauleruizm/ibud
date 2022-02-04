import ReactDOM from 'react-dom'
import React from 'react'
// import reportWebVitals from './reportWebVitals'
import { Budget } from './Budget'

ReactDOM.render(
  <React.StrictMode>
    <Budget />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(ReactDOM.render)
