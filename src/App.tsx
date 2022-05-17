import {GlobalStyle} from "./styles/global";
import {Header} from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import Modal from 'react-modal';
import {useState} from 'react';


export function App() {

  //criando o modal
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
      //sempre que uma função começa com handle é pq o usuário vai clicar em algo
      setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>
      <Modal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}>
                <h2>
                    Cadastrar Transação
                </h2>
      </Modal> 
      <GlobalStyle/>
    </>
  );
}


