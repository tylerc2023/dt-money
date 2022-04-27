import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   
   :root {
       --background: #f9f2f5;

   }

  * {
      margin:0;
      padding: 0;
      box-sizing: border-box;

  }

  //16px é o tamanho padrão de fonte ideal para desktop
  html { //para uma melhor adaptação do conteú ao tamanho da tela do usuário.
      @media (max-width: 1080px){
          font-size:93.75%; //equivale a 15px
      }
      @media (min-width: 720px){
          font-size: 87.5%; //14px
      }

  }

  body {
      background: var(--background);
      -webkit-font-smoothing: antialiased; //para as fontes ficarem mais detalhadas/nítidas 

  }

`
