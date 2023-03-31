import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home/index.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Survey from './pages/Survey.jsx';
import Header from './components/Header/index.jsx';
import Error from './components/Error/index.jsx';
import Results from './pages/Results/Results.jsx';
import Freelances from './pages/Freelances/Freelances.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <React.StrictMode>
            <Router>
                  <Header />
                  <Switch>
                        <Route exact path="/">
                              <Home />
                        </Route>
                        <Route path="/survey/:questionNumber">
                              <Survey />
                        </Route>
                        <Route path='/results'>
                              <Results />
                        </Route>
                        <Route>
                              <Freelances />
                        </Route>
                        <Route>
                              <Error />
                        </Route>
                  </Switch>
            </Router>
      </React.StrictMode>
);
