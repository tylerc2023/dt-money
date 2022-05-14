import logoIMG from "../../assets/logo.svg"; 
import {Container, Content} from './styles';
import {useState} from 'react';
import Modal from 'react-modal';


export function Header() {
    //criando o modal
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        //sempre que uma função começa com handle é pq o usuário vai clicar em algo
        setIsNewTransactionModalOpen(false);
    }

    return(
        <Container>
            <Content>
            <img src={logoIMG} alt="dt money" />
            <button type="button" onClick={handleOpenNewTransactionModal}>
                Nova transação
            </button>
            <Modal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}>
                <h2>
                    Cadastrar Transação
                </h2>
            </Modal> 
            </Content>
        </Container>
    ); //o modal pode ficar em qualquer lugar do código
}
