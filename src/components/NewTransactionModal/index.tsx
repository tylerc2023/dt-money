import Modal from 'react-modal';


interface NewTransactionModaProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose} : NewTransactionModaProps) {
    return(
        <Modal isOpen={isOpen} 
        onRequestClose={onRequestClose}>
                  <h2>
                      Cadastrar Transação
                  </h2>
        </Modal> 
    );
}
