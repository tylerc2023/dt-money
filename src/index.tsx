import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import {createServer, Model} from 'miragejs';


createServer({
  //banco de dados do miragejs
  models: {
     transaction: Model,
  },

  routes() {
    this.namespace = 'api';

    //para cada uma das rotas:
    this.get('/transactions', () => {
      return this.schema.all('transaction'); //todas as transações que tenho no banco de dados
    })

    this.post('/transactions', (schema, request) => {
        const data = JSON.parse(request.requestBody)

        return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
