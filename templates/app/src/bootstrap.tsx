import React from 'react'
import ReactDOM from 'react-dom'
{% if inputs.add_routing %}
import { BrowserRouter } from 'react-router-dom'
{% endif %}
import { GlobalStyle } from './core/styles/global'
import App from './App'

ReactDOM.render(
  <>
    <GlobalStyle />
    {% if inputs.add_routing %}
    <BrowserRouter>
    {% endif %}

      <App />

    {% if inputs.add_routing %}
    </BrowserRouter>
    {% endif %}
  </>,
  document.getElementById('root')
)
