import { useState } from 'react';
import { createContext } from 'react';

// Je créais un context pour gérer le DarkMode.

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
     const [theme, setTheme] = useState('light');
     const toggleTheme = () => {
          setTheme(theme === 'light' ? 'dark' : 'light');
     };

     return (
          <ThemeContext.Provider value={{ theme, toggleTheme }}>
               {children}
          </ThemeContext.Provider>
     );
};

// Je créais un context pour récupérer et sauvegarder mes réponses au questionnaire.
export const SurveyContext = createContext();

export const SurveyProvider = ({ children }) => {
     const [answers, setAnswers] = useState({});
     const saveAnswers = (newAnswers) => {
          setAnswers({ ...answers, ...newAnswers });
     };

     return (
          <SurveyContext.Provider value={{ answers, saveAnswers }}>
               {children}
          </SurveyContext.Provider>
     );
};
