//serviços de dados

import axios from 'axios';

export const api = axios.create({
    //criar instâncias p/ setar informações que são padrão para todas as requisições
    baseURL: 'http://localhost:3000/api',  //endereço que se repete.
})
