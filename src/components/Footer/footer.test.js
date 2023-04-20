import { ThemeProvider } from '../../utils/Context/Context';
import Footer from './Footer';
import { fireEvent, render, screen } from '@testing-library/react';

// Je vais dans un premier temps vérifier que mon footer 'render' bien sans crasher.
// 1 - J'utilise le context dans ce composant donc je n'oublie pas de l'englober de mon 'ThemeProvider'.

describe('Footer', () => {
     it('Should render without crash', async () => {
          render(
               // 1
               <ThemeProvider>
                    <Footer />
               </ThemeProvider>
          );
     });

     it('should Change theme', async () => {
          render(
               <ThemeProvider>
                    <Footer />
               </ThemeProvider>
          );
          // Je cible l'élément de mon composant que je veux tester.
          const nightModeButton = screen.getByRole('button');
          // ...et j'explique à mon test ce que j'attends comme string à l'intérieur avant l'event => clic.
          expect(nightModeButton.textContent).toBe('Changer de mode : ☀️');

          // Maintenant je vais simuler un event sur mon buttton =>
          fireEvent.click(nightModeButton);
          // ...et lui dire la string que j'attends à cet event
          expect(nightModeButton.textContent).toBe('Changer de mode : 🌙');
     });
});
