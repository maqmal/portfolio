import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
.light-theme{
    --shadow: rgba( 31, 38, 135, 0.37 );
    --primary-color: white;
    --primary-color-light: #057FFF;
    --background-dark-color: rgb(252,252,246);
    --background-dark-grey: rgba(228, 228, 228, .05);
    --background-dark-grey-sidebar: rgba(228, 228, 228);
    --background-dark-grey-span: rgba(228, 228, 228);
    --border-color: #cbced8;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #151515;
    --font-light-color: #313131;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #E4E4E4;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;    
    --highlight-text: rgba(179,84,217);
    --grad: #ff9b70;

    --n1: #fff;
    --n2: rgb(252,252,246);
    --n3: #fff;
    --n4: rgb(252,252,246);
    --n5: rgb(252,252,246);
    --n6: rgb(255,255,255);
}
.dark-theme{
    --shadow: #0E0E0E;
    --primary-color: white;
    --primary-color-light: #057FFF;
    --background-dark-color: #10121A;
    --background-dark-grey: rgba( 25, 29, 43, 0.7 );
    --background-dark-grey-sidebar: rgba(25, 29, 43);
    --background-dark-grey-span: rgba(228, 228, 228, .044);
    --border-color: #2e344e;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #FFF;
    --font-light-color: #a4acc4;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #191D2B;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
    --highlight-text: rgba(179,84,217);
    --grad: #EAC38A;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Roboto Mono', monospace;
    font-size: 1.1rem;
}
body{
    background: linear-gradient(90deg, var(--n5) 0%, var(--n1) 18%, var(--n2) 43%, var(--n4) 52%, var(--n3) 70%, var(--n6) 100%);
    background-color: var(--background-dark-color);
    color: var(--font-light-color);
    transition: all .4s ease-in-out;
}
body::-webkit-scrollbar{
    width: 9px;
    background-color: #383838;
}
body::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background-color: #6b6b6b;
}
body::-webkit-scrollbar-track{
    border-radius: 10px;
    background-color: #383838;
}
textarea{
    max-width: 100%;
}
a{
    font-family: inherit;
    color: inherit;
    font-size: inherit;
    font-size: 1rem;
}
h1{
    font-size: 4rem;
    color: var(--white-color);
    span{
        font-size: 4rem;
        @media screen and (max-width: 502px){
            font-size: 3rem
        }
    }
    @media screen and (max-width: 502px){
        font-size: 3rem
    }
}
span{
    color: var(--primary-color);
}
h6{
    color: var(--white-color);
    font-size: 1.2rem;
    padding-bottom: .6rem;
}
//Utilities
.u-margin-bottom{
    margin-bottom: 4rem;
}
.theme-normal .light-theme{
    background-color: var(--border-color);
    svg{
        color: black;
    }
}
//Floting Toggler
.light-dark-mode-normal{
    border-radius: 6%;
    position: fixed;
    right: 0;
    top: 50%;
    background-color: var(--font-dark-color);
    width: 4.5rem;
    height: 'auto';
    z-index: 15;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    /* transform: rotate(-90deg); */
    svg{
        padding-top: 2px;
        display: flex;
        align-items: center;
        font-size: 1rem;
        color: var(--white-color);
    }
  }
  .nav-toggle{
        transform: translateX(0);
        z-index: 20;
        justify-content: center;
    }
  //Nav Toggler
  .ham-burger-menu{
      position: fixed;
      top: 3%; 
      display: none;
      z-index: 15;
      svg{
          margin-top: -30%;
          font-size: 4vw;
          color: var(--white-color);
      }
    }
  @media screen and (max-width:1200px){
      body{
        background: linear-gradient(180deg, var(--n3) 0%, var(--n1) 50%);
        background-color: var(--background-dark-color);
        color: var(--font-light-color);
        transition: all .4s ease-in-out;
      }
    .ham-burger-menu{
        display: block;
        z-index: 1;
    }
    .true-status{
        z-index: 1;
    }
  }
  //Nav Toggler
  .ham-burger-menu-nav{
      position: fixed;
      left: 3%;
      top: 3%; 
      display: none;
      z-index: 15;
      svg{
          font-size: 5vh;
          color: var(--white-color);
      }
    }

  @media screen and (max-width:1200px){
    .ham-burger-menu-nav{
        display: block;
        z-index: 25;
    }
  }
  
  @media screen and (max-width:450px){
    margin-left: 0;
    .ham-burger-menu{
        display: none;
    }
    .ham-burger-nav{
        display: none;
    }
    .theme-normal{
        display: none;
    }
  }

  @media screen and (min-width:450px){
    #bottom-nav{
        display: none;
    }
  }

  /* Z-FOLD */
  @media screen and (max-width:280px){
    #bottom-nav{
        display: none;
    }
    .ham-burger-menu{
      position: fixed;
      left: 3%;
      top: 3%; 
      display: none;
      svg{
          font-size: 7vw;
          color: var(--white-color);
      }
    }
  }

  @media screen and (max-width:280px){
    .ham-burger-menu{
        display: flex;
    }
    .ham-burger-menu-nav{
        display: flex;
    }
  }
`;

export default GlobalStyle;