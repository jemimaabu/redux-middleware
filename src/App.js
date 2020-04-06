import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Average Sans', sans-serif;
  }
`

const AppContainer = styled.div`
  height: 100vh;
  background-color: #37474F;
  color: #fff;

  header {
    padding: 20px;
  }

  h1 {
    margin-top: 0;
    font-family: 'Oswald', sans-serif;
  }
`

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <header className="App-header">
        <h1>
          Redux Middleware
        </h1>
      </header>
    </AppContainer>
  );
}

export default App;
