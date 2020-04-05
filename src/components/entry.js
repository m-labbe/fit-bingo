import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const renderApp = (config) => {
  ReactDOM.render(
    <App config={config} />,
    document.getElementById('main'),
  )
}

window.renderApp = () => {
  renderApp(window.bootstrapData)
}
