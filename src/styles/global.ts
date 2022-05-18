import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   
   :root {
       --background: #f9f2f5;
       --red: #e52e4d;
       --blue: #5429cc;
       --green: #33cc95;

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

  //definindo a fonte Poppins no body,input,textarea, button. Por que por padrão eles não pegam a fonte pq eles tem sua própria fonte, isso vai sobrescrever tudo.
  body, input, textarea, button {
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
      font-weight:600;
  }//strong são as tags de negrito

  button {
      cursor: pointer;
  }

  //tudo o que estiver desabilitado na nossa aplicação vai ficar com uma cor mais clara
  [disabled] {
      opacity:0.6;
      cursor: not-allowed;
  }
  
  
   .rect-modal-overlay {
     background: rgba(0, 0, 0, 0.5); //50% de opacidade
     position: fixed; //ocupar a tela toda
     top: 0;
     bottom: 0;
     right: 0;
     
     display: flex;
     align-items: center;
     justify-content: center;
  }


    .react-modal-content {
       width: 100%;
       max-width: 576px;
       background: var(--background);
       padding: 3rem;
       position: relative; //pq depoisvamos ter conteúdos com position absolute, senão não funcionariam lá
       border-radius: 0.25rem;
  }
`
