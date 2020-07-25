import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import Dashboard from '../src/components/Dashboard'

function App() {
  return (
    <div>
         <BrowserRouter>
         <div>
         
        <Link to="/dashboard"></Link>

          <Switch>
            <Route path="/dashboard" component={Dashboard}/>
          </Switch>

           
         </div>

         
         </BrowserRouter>
    </div>
  );
}

export default App;
