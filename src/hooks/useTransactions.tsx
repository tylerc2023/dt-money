import { createContext, useEffect, useState, ReactNode, useContext } from 'react';
import { api } from '../services/api';


interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

//interface TransactionInput {
  //title: string;
    //amount: number;
    //type: string;
    //category: string;
//}

//para não precisar criar uma nova interface
type TransactionInput = Omit<Transaction, 'id'|'createdAt'>;

//outra forma de fazer o que está acima é usando o pick no lugar do omit e colocando o que quero em vez de omitir o que não quero


interface TransactionsProviderProps {
    children: ReactNode; //ceita qualquer tipo de conteúdo válido p/ o react
}

interface TransactionsContextDate {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

//para qualquer componente ter acesso ao contexto precisamos por em volta um provider
const TransactionsContext = createContext<TransactionsContextDate>(
  {} as TransactionsContextDate //vamos forçar uma tipagem para parar de dar erro
  ); //forma mais simples de criar um contexto no react

export function TransactionsProvider({children}: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]); //como são várias transações usaremos sempre um array vazio

    useEffect(() => {
      api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, []); 

//transformando em uma função assincrona
async function createTransaction(transactionInput: TransactionInput) {
  const response = await api.post('/transactions', {
    ...transactionInput,
    createdAt: new Date(),
  })
  const {transaction} = response.data;

//sempre que adiciono uma informação a um vetor eu coloco []  e dentro coloco todas as informações que ele tem e adiciono a nova informação nele
  setTransactions([
    ...transactions,
    transaction,

  ]);
};

  
  return (
      <TransactionsContext.Provider value={{transactions, createTransaction}}>
        {children}
      </TransactionsContext.Provider>
  )
}


export function useTransactions() {
   const context = useContext(TransactionsContext);

   return context;
}
