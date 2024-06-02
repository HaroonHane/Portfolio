import { createGlobalStyle} from "styled-components";

const GlobalStyle =createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter';
    }
    body{
        background:#1b1b1b;
      
    }
    html{
      @media (max-width:900px) {
          font-size: 75%;
        }
    }
    .text-section{
        color: #fff;
        overflow: hidden;
        z-index: 2; 
        @media (max-width:900px) {
          min-height: 80dvh;
        }
    }

    .each-quest{
    margin-block: 2.5rem;
    cursor: pointer;
    overflow: hidden;
    transition:all 500ms;
    padding: 1rem;
    margin: 0;
    p{
      font-weight: lighter;
      font-size: 0.9rem;
      font-family: Arial, Helvetica, sans-serif;
    }
    }
    .line{
      width: 100%;
      background-color: #cccccc;
      height: 0.2rem;
      margin-block: 1rem;
    }
    .closed{
      height:0;
      transform: translateX(-120%);
    }
    .show{
      height: auto;
      transform: translateX(0%);
      pointer-events: none;
    }
    .contact-us{
      text-decoration: none;
      color: #fff;
      font-weight: bold;
    
    }
    ::-webkit-scrollbar{
      display: none;

    }

.whole-app-wrapper{
  overflow: hidden;
}
.each-movie-wrapper{
  overflow: hidden;
}

.ServicesSection-img-wrapper{
  @media (max-width:900px) {
    min-height: 100dvw;
    img{
      width: 100%;
      object-fit:contain;
    }
  }
}

.contact-btn-wrapper{
  @media (max-width:700px) {
    a{
      pointer-events: all;
  cursor: pointer;
    }
   button{
  border-radius: 5px;
   }
  }

}

`


export default GlobalStyle;