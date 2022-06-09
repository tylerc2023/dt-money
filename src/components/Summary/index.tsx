import React, {useContext} from 'react';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useTransactions } from '../../hooks/useTransactions';
import { Container } from "./styles";


export function Summary() {
    //obtendo os valores do contexto (há duas formas, usando handle props -> menos usada ou useContext)
    const {transactions} = useTransactions();


   //tudo o que está acima só que de uma forma melhor:
   const summary = transactions.reduce((acc, transaction) => {
     if (transaction.type === 'deposit') {
       acc.deposits += transaction.amount;
       acc.total += transaction.amount;
     } else {
       acc.withdraws += transaction.amount;
       acc.total -= transaction.amount;
     }
     return acc;

   }, {
       deposits: 0,
       withdraws: 0,
       total: 0,
   })

    return(
        <Container>
           
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style:'currency',
                        currency: 'BRL'
                    }).format(summary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saídas" />
                </header>
                <strong>
                {new Intl.NumberFormat('pt-BR', {
                        style:'currency',
                        currency: 'BRL'
                    }).format(summary.withdraws)}
                </strong>
            </div>
            <div className="highliht-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong> -
                {new Intl.NumberFormat('pt-BR', {
                        style:'currency',
                        currency: 'BRL'
                    }).format(summary.total)}
                </strong>
            </div>
        </Container>
    );
}

//function TransactionsContexts(TransactionsContext: any) {
  //  throw new Error("Function not implemented.");
//}

