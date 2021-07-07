import React from "react";
import Styled from 'styled-components'
import { Route, Link, Switch } from 'react-router-dom';
import pizzaHeadline from './images/pizza.jpeg'

// Components used for different routes
import FormPage from './components/FormPage'

const StyledHeadline = Styled.div`
  background: url(${pizzaHeadline}) center;
  h2 {
    padding: 40vh;
    color: white;
    text-align: center;
  }
`

const StyledHeader = Styled.header`
  background-color: black;
  color: white;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: center;
`

const StyledApp = Styled.div`
  background-color: black;
`

const App = () => {


  return (
    <StyledApp>
      <StyledHeader>
        <h1>Lambda Eats</h1>
        <div>
          <Link to='/'>Home</Link> <br />
          <Link to='/pizza'>Order Pizza</Link>
        </div>

        <Switch>
          {/* <Route path={'/'}>
            <Home />
          </Route> */}

          <Route path={'/pizza'}>
            <FormPage />
          </Route>

        </Switch>

      </StyledHeader>


      <StyledHeadline>
        <h2>You'll love it to bits</h2>
      </StyledHeadline>
    </StyledApp>  
  );
};
export default App;
