
export function NewTransactionModal() {
    return(
        <Modal isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal}>
                  <h2>
                      Cadastrar Transação
                  </h2>
        </Modal> 
    );
}
