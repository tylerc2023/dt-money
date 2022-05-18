import {GlobalStyle} from "./styles/global";
import {Header} from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import Modal from 'react-modal';
import {useState} from 'react';

 //mais para uma questão de acessibilidade
Modal.setAppElement('root');

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
      <GlobalStyle/>
    </>
  );
}


