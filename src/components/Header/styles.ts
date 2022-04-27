import styled from 'styled-components';

export const Container = styled.header`
   background: var(--blue);
   
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto; //sempre estará centralizado.

  padding: 2rem 1rem 12rem;

  //alinhando a logo e o botão verticalmente
  display: flex;
  align-items: center;
  justify-content: space-between; //espaçamento entre a logo e o botão.

  button {
      font-size: 1rem;
      color: #fff;
      background: var(--blue-light);
      border: 0;
      padding: 0 2rem;
      border-radius: 0.25rem;
      height: 3rem; //ficará com 48px de altura.

    &:hover {
        filter: blur(5px); //a tag filter dá efeitos diferentões ,nesse caso para o botão
    }
  }
`
