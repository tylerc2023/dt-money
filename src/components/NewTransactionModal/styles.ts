import styled from 'styled-components';
import {darken} from 'polished';
// a função darken escurece uma cor

export const Container = styled.form`
    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;

        border: 1px solid #d7d7d7;
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: var(--text-body);
        }

        & + input {
            margin-top: 1rem;
        }
       
    }

    button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);
        color: #fff;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        font-weight: 600;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr; //duas colunas
    gap: 0.5rem; //espaçamento entre cada botão
`;

interface RadioBoxProps { //para não dar mais erro na isActive
    isActive: boolean;
}

export const RadioBox  = styled.button<RadioBoxProps>` 
     height: 4rem;
        border: 1px solid #d7d7d7;
        border-radius: 0.25rem;
        
        //nesse caso o css fica entre aspas simples ou duplas pq agora isso é javascript!
        background: ${(props) => props.isActive ? '#ccc' : 'transparent'};

        display: flex;
        align-items: center;
        justify-content: center;

        transition: border-color 0.2s;

        &:hover { //nesse caso não conseguimos usar o filter pq ele escurece por completo e não só as bordas de um botão
            border-color: ${darken(0.1, '#d7d7d7')};
        }

        img {
            width: 20px;
            height: 20px;
        }

        span {
            display: inline-block;
            margin-left: 1rem;
            font-size: 1rem;
            color: var(--text-title);
        }
`;
