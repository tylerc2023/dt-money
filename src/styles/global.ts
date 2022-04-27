import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   
   :root {
       --background: #f9f2f5;
       --red: #e52e4d;
       --blue: #5429cc;

       --blue-light: #6933ff;

       --text-title: #363f5f;
       --text-body: #969c83;

       --shape: #ffffff;
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
      -webkit-font-smoothing: antialiased; /*para as fontes ficarem mais detalhadas/nítidas */
  }

  button {
      cursor: pointer;
  }

  //tudo o que estiver desabilitado na nossa aplicação vai ficar com uma cor mais clara
  [disabled] {
      opacity:0.6;
      cursor: not-allowed;
  }
`
