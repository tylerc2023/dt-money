import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import {createServer} from 'miragejs';


createServer({
  routes() {
    this.namespace = 'api';

    //para cada uma das rotas:
    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createAt: new Date()
        }
      ] //aqui posso retornar o que eu quiser
    })

    this.post('/transactions', (schema, request) => {
        const data = request.requestBody
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

