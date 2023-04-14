import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home/Home.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Survey from './pages/Survey/Survey.jsx';
import Header from './components/Header/Header.jsx';
import Error from './components/Error/index.jsx';
import Results from './pages/Results/Results.jsx';
import Freelances from './pages/Freelances/Freelances.jsx';

import { ThemeProvider, SurveyProvider } from './utils/Context/Context.jsx';
import GlobalStyle from './utils/style/GlobalStyle.jsx';
import Footer from './components/Footer/Footer.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <React.StrictMode>
          <Router>
               <ThemeProvider>
                    <SurveyProvider>
                         <GlobalStyle />
                         <Header />
                         <Switch>
                              <Route exact path="/">
                                   <Home />
                              </Route>
                              <Route path="/survey/:questionNumber">
                                   <Survey />
                              </Route>
                              <Route path="/results">
                                   <Results />
                              </Route>
                              <Route path="/freelances">
                                   <Freelances />
                              </Route>
                              <Route>
                                   <Error />
                              </Route>
                         </Switch>
                         <Footer />
                    </SurveyProvider>
               </ThemeProvider>
          </Router>
     </React.StrictMode>
);
