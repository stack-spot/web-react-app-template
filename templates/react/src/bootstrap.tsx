import React from 'react'
import ReactDOM from 'react-dom'
{% if not inputs.is_widget %}
import { BrowserRouter } from 'react-router-dom'
{% endif %}
import { GlobalStyle } from './core/styles/global'
import App from './App'

ReactDOM.render(
  <>
    <GlobalStyle />
    {% if not inputs.is_widget %}
    <BrowserRouter>
    {% endif %}

      <App />

    {% if not inputs.is_widget %}
    </BrowserRouter>
    {% endif %}
  </>,
  document.getElementById('root')
)
