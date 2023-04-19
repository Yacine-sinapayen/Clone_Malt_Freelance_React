// La fonction Wrapper me permet d'éviter d'importer 'ThemeProvider' et 'SurveyProvider' dans tous mes tests afin d'évier une syntaxe trop lourde. cf exemple freelances.test.js. Aussi afin de gérer les tests de mes composants avec des 'Link' je vais y insérer par default 'MemoryRouter'.
import { render as rtlRender } from '@testing-library/react';
import { SurveyProvider, ThemeProvider } from '../../utils/Context/Context.jsx';
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min.js';

function Wrapper({ children }) {
     return (
          <MemoryRouter>
               <ThemeProvider>
                    <SurveyProvider>{children}</SurveyProvider>
               </ThemeProvider>
          </MemoryRouter>
     );
}

export function render(ui) {
     rtlRender(ui, { wrapper: Wrapper });
}
