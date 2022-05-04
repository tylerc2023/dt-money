import React from 'react';
import ReactDOM from 'react-dom/client';
import {createServer} from 'miragejs';
import {App} from './App';

createServer({
  routes() {
    this.namespace = 'api';
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
