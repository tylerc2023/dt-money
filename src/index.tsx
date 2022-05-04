import React from 'react';
import ReactDOM from 'react-dom/client';
import {createServer} from 'miragejs';
import {App} from './App';

createServer({
  routes() {
    this.namespace = 'api';

    //para cada rota:
    this.get('/transacitons', () => {
      return [ //posso retornar o que eu quiser
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createAt: new Date()
        } //alguns campos de valor retornado da api
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
