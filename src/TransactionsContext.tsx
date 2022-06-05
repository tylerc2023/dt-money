
import { createContext, useEffect, useState, ReactNode } from 'react';
import { api } from './services/api';


interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

interface TransactionsProviderProps {
    children: ReactNode; //ceita qualquer tipo de conteúdo válido p/ o react
}

//para qualquer componente ter acesso ao contexto precisamos por em volta um provider
export const TransactionsContext = createContext<Transaction[]>([]); //forma mais simples de criar um contexto no react

export function TransactionsProvider({children}: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]); //como são várias transações usaremos sempre um array vazio

    useEffect(() => {
      api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, []); 


function createTransaction(transaction: Transaction) {
  api.post('/transactions', transaction)

};
}
  
  return (
      <TransactionsContext.Provider value={transactions}>
        {children}
      </TransactionsContext.Provider>
  )
}
