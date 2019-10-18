import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700&display=swap');
  @import url('https://fonts.googleapis.com/earlyaccess/opensanshebrew.css');

  body {
    margin:0;
    padding:0;
    font-size: 62.5%;
    font-family: 'Source Sans Pro',"Open Sans Hebrew", sans-serif;
  }

  h1 {
    font-size: 3rem;
    margin: 1rem 0;
  }

  h2 {
    font-size: 2rem;
    margin: 1rem 0;
  }

  h3 {
    font-size: 1.4rem;
    font-weight: 400;
    margin: 0;
  }

  h4 {
    font-size: 1.3rem;
    font-weight: 300;
    margin: 0;
  }

  h5{
    font-size: 1rem;
    font-weight: 300;
    margin: 0;
  }
`

export default GlobalStyle
