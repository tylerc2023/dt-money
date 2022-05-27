import { createContext } from 'react';


//para qualquer componente ter acesso ao contexto precisamos por em volta um provider
export const TransactionsContext = createContext([]); //forma mais simples de criar um contexto no react
