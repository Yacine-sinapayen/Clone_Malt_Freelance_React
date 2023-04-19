import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home/Home.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Survey from './pages/Survey/Survey.jsx';
import Header from './components/Header/Header.jsx';
import Error from './components/Error/index.jsx';
import Results from './pages/Results/Results.jsx';
import Freelances from './pages/Freelances/Freelances.jsx';
import Profile from './pages/Profile/Profile.jsx';

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
                         <Routes>
                              <Route path="/" element={<Home />} />
                              <Route
                                   path="/survey/:questionNumber"
                                   element={<Survey />}
                              />
                              <Route path="/results" element={<Results />} />
                              <Route
                                   path="/freelances"
                                   element={<Freelances />}
                              />
                              <Route
                                   path="/profile/:id"
                                   element={<Profile />}
                                   render={(props) => <Profile {...props} />}
                              >
                              </Route>
                              <Route path="*" element={<Error />} />
                         </Routes>
                    </SurveyProvider>
                    <Footer />
               </ThemeProvider>
          </Router>
     </React.StrictMode>
);
