import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import axios from 'axios';

import { Route, Link, Switch } from 'react-router-dom';

// Components used for different routes
import FormPage from './components/FormPage'



const App = () => {


  return (
    <div className='App'>
      <header>
        <h1>Lambda Eats</h1>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/pizza'>Order Pizza</Link>
        </nav>

        <Switch>
          {/* <Route path={'/'}>
            <Home />
          </Route> */}

          <Route path={'/pizza'}>
            <FormPage />
          </Route>

        </Switch>

      </header>


      <div>
        <h2>You'll love it to bits</h2>
      </div>
    </div>  
  );
};
export default App;
