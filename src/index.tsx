import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import {createServer, Model} from 'miragejs';


createServer({
  //banco de dados do miragejs
  models: {
     transaction: Model,
  },

  seeds(server) {
     server.db.loadData({
       transactions:[
         {
           id: 1,
           title: 'freelance de website',
           type: 'deposit',
           category: 'Dev',
           amount: 6000,
           createdAt: new Date('2021-02-12  09:00:00'), 
         },
         {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1100,
          createdAt: new Date('2021-02-14  11:00:00'), 
        }
       ], //sempre o nome do models no plural
     })
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

