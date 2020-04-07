import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import { LoginContainer, UserContainer } from './components'
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Average Sans', sans-serif;
    font-size: 20px;
  }

  button {
    padding: 5px 10px;
    min-width: 75px;
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

const StyledMain = styled.main`
  width: 50%;
  max-width: 500px;
  margin: 20px auto;

  @media (max-width: 750px) {
    width: 90%;
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
      <StyledMain>
        <Router>
          <Route exact path="/">
            <LoginContainer />
          </Route>
          <Route exact path="/login">
            <LoginContainer />
          </Route>
          <Route
            path="/user"
            render={() => (
              localStorage.getItem('user') ?
                <UserContainer /> :
                <Redirect to={{
                  pathname: '/login',
                  state: { status: 'Slow down there buckaroo, you need to log in first' }
                }} />
            )}
          />
        </Router>
      </StyledMain>
    </AppContainer>
  );
}

export default App;
