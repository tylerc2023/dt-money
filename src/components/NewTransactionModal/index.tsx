import Modal from 'react-modal';
import { Container, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/close.svg';


interface NewTransactionModaProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose} : NewTransactionModaProps) {
    return(
        <Modal isOpen={isOpen} 
        onRequestClose={onRequestClose} 
        overlayClassName="react-modal-overlay"
        className="react-modal-content">
        <button type="button"
         onClick={onRequestClose} 
         className="react-modal-close">
            <img src={closeImg} alt="Fechar modal" />
        </button>
            <Container>
              <h2>Cadastrar Transação</h2>
              <input placeholder="Título" />
              <input type="number" placeholder="Valor" />
              <TransactionTypeContainer>

              </TransactionTypeContainer>
              <input placeholder="Categoria" />
              <button type="submit">Cadastrar</button>
            </Container>
        </Modal> 
    );
}
