import {GlobalStyle} from "./styles/global";
import {Header} from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import Modal from 'react-modal';
import {useState} from 'react';
import { NewTransactionModal } from "./components/NewTransactionModal";
import {TransactionsContext} from './TransactionsContext';
//mais para uma questão de acessibilidade
Modal.setAppElement('#root')

export function App() {

  //criando o modal
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  const [transactions, setTransactions] = useState<Transaction[]>([]); //como são várias transações usaremos sempre um array vazio

  useEffect(() => {
      api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, []);

  function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
      //sempre que uma função começa com handle é pq o usuário vai clicar em algo
      setIsNewTransactionModalOpen(false);
  }

  return ( //no value colocamos o valor atual do contexto
    <TransactionsContext.Provider value={transactions}> 
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>
      <NewTransactionModal
       isOpen={isNewTransactionModalOpen}
       onRequestClose={handleCloseNewTransactionModal}/>
      <GlobalStyle/>
    </TransactionsContext.Provider>
  );
}



