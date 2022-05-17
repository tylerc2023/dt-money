import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import {GlobalStyle} from './styles/global';
import Modal from  'react-modal';


export function App() {
  return (
    <>
      <Header/>
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



