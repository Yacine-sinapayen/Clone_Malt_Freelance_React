import { ThemeProvider } from '../../utils/Context/Context';
import Card from './Card';
import { fireEvent, render, screen } from '@testing-library/react';

// Je vais vérifier que mon composant 'render' bien sans crasher.
describe('Card component', () => {
     test('should render without crash', async () => {
          render(
               <ThemeProvider>
                    <Card />
               </ThemeProvider>
          );
     });

     // Je vérifie que mon composant reçoit bien la prop {title}.
     test('should receive title prop', () => {
          const title = 'titre du test';
          render(
               <ThemeProvider>
                    <Card title={title} />
               </ThemeProvider>
          );
          // Récupérer l'élément contenant le titre.
          const cardTitle = screen.getByText(title);
          // Vérifier que le titre est correctement affiché.
          expect(cardTitle).toBeInTheDocument();
     });
     test('should render title and image', async () => {
          render(
               <ThemeProvider>
                    {/* Je dis à mon test que mon composant possède trois props. */}
                    <Card
                         title="Harry Potter"
                         label="Super frontend"
                         picture="/myPicture.png"
                    />
               </ThemeProvider>
          );

          const cardPicture = screen.getByRole('img');
          // La regex passée à getBytext(/Harry/i) signifie que la recherche est insensible à la casse pour le mot "Harry".
          const cardTitle = screen.getByText(/Harry/i);
          // J'explique le chemin que j'attends pour mon image.
          expect(cardPicture.src).toBe('http://localhost/myPicture.png');
          // Et le contenu que j'attends dans mon titre.
          expect(cardTitle.textContent).toBe('Harry Potter');
     });
     test('Should add ⭐️ around title', async () => {
          render(
               <ThemeProvider>
                    <Card
                         title="Harry Potter"
                         label="Super frontend"
                         picture="/myPicture.png"
                    />
               </ThemeProvider>
          );
          // 1 - Je cible mon titre.
          // 2 - Je récupère la div parent le plus proche de mon titre grace à 'closest'.
          // 3 - Je lance l'event 'clic' dessus.
          // 4 - Et je dis ce que j'attends suite à cet event.

          // 1
          const cardTitle = screen.getByText(/Harry/i);
          // 2
          const parentNode = cardTitle.closest('div');
          // 3
          fireEvent.click(parentNode);
          // 4
          expect(cardTitle.textContent).toBe('⭐️Harry Potter⭐️');
     });
});
