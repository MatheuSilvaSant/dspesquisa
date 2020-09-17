import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Components/Header';

import Charts from './Pages/Charts';
import Home from './Pages/Home';
import Records from './Pages/Records';

const Routes = () =>{
    return(
       <BrowserRouter>
          <Header/>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/records">
                 <Records />
                </Route>
                <Route path="/charts">
                    <Charts/>
                </Route>
            </Switch>
       </BrowserRouter>
    );
}
export default Routes;