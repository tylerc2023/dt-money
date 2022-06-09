import { FormEvent, useState} from 'react';
import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox} from './styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import {api} from '../../services/api';
import { useTransactions } from '../../hooks/useTransactions';


interface NewTransactionModaProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose} : NewTransactionModaProps) {
    const {createTransaction} = useTransactions();

    //anotando dados dos inputs (obs! sempre iniciamos um estado como vazio)
    const [title, setTitle] = useState(''); //inputs de texto
    const [amount, setAmount] = useState(0); //inputs numéricos
    const [category, setCategory] = useState(''); 

    const [type, setType]  = useState('deposit'); //criando estado para armazenar o input

//por padrão todo submit recarrega a tela depois de clicado
    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault(); //prevenir funcionamento padrão dp html com essa função

       await createTransaction({
            title,
            amount,
            category,
            type,

        })

        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');
        onRequestClose();
    }

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
            <Container onSubmit={handleCreateNewTransaction}>
              <h2>Cadastrar Transação</h2>
              <input 
              placeholder="Título"
              value={title}
              onChange={event => setTitle(event.target.value)}
               />
              <input
               type="number" 
               placeholder="Valor" 
               value={amount}
               onChange={event => setAmount(Number(event.target.value))} //o +  antes do (+event.target.value) converte para number
               //o event sempre retorna string
               />

              <TransactionTypeContainer>
                 <RadioBox type="button"
                 onClick={() => {setType('deposit');}}
                 isActive={type === 'deposit'}
                 activeColor="green"
                 >
                    <img src={incomeImg} alt="Entrada" />
                    <span>Entrada</span>
                 </RadioBox>

                 <RadioBox type="button"
                 onClick={() => {setType('withdraw');}}
                 isActive={type === 'withdraw'}
                 activeColor="red"
                 >
                    <img src={outcomeImg} alt="Saída" />
                    <span>Saída</span>
                 </RadioBox>
              </TransactionTypeContainer>

              <input placeholder="Categoria" 
               value={category}
               onChange={event => setCategory(event.target.value)}
              />
              <button type="submit">Cadastrar</button>
            </Container>
        </Modal> 
    );
}

//OBS! Dentro do reactjs há várias formas de lidar com formulário
