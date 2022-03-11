import React from 'react'
import ReactDOM from 'react-dom'
import GlobalStyled from './GlobalStyled.jsx'
import App from './App.jsx'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyled/>
  </React.StrictMode>,
  document.getElementById('root')
)
