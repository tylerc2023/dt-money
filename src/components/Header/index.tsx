import logoIMG from "../../assets/logo.svg"; 
import {Container, Content} from './styles';
import {useState} from 'react';
import Modal from 'react-modal';


interface HeaderProps {
    onOpenNewTransactionModal : () => void;
}

export function Header(props:HeaderProps) {

    return(
        <Container>
            <Content>
            <img src={logoIMG} alt="dt money" />
            <button type="button" onClick={handleOpenNewTransactionModal}>
                Nova transação
            </button>
           
            </Content>
        </Container>
    ); //o modal pode ficar em qualquer lugar do código
}
