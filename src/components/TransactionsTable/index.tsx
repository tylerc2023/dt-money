import { useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import {Container} from "./styles";
import {TransactionsContext} from '../../TransactionsContext';


export function TransactionsTable() {
    const data = useContext(TransactionsContext);

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                   {transactions.map(transaction => (
                       //toda vez que faço um map, o primeiro elemento que vem dentro dele precisa ter uma key ee nela coloca qual que é a informação única
                        <tr key={transaction.id}>
                          <td>{transaction.title}</td>
                          <td className={transaction.type}>
                              {new Intl.NumberFormat('pt-BR', {
                                  style: 'currency', //formatação de moeda
                                  currency: 'BRL'
                              }).format(transaction.amount)}
                          </td>
                          <td>{transaction.category}</td>

                          <td className={transaction.type}>
                              {new Intl.DateTimeFormat('pt-BR').format(
                                  new Date(transaction.createdAt) 
                              )}
                          </td>
                        </tr>
                   //vamos usar uma api do browser para formatar as datas e valores
                  ))}
                </tbody>
            </table>
        </Container>
    );
}

function TransactionsContext(TransactionsContext: any) {
    throw new Error("Function not implemented.");
}
