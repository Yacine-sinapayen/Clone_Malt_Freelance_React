import { rest } from 'msw';
import { setupServer } from 'msw/node';
// 'waitFor' permet de gérer du code asynchrone comme pour un appel API par exemple.
import {
     waitFor,
     screen,
     waitForElementToBeRemoved,
} from '@testing-library/react';
import { render } from '../../utils/test/index.js';

import Freelances from './Freelances.jsx';

const freelancersMockedData = [
     {
          name: 'Harry Potter',
          job: 'Magicien frontend',
          picture: '',
     },
     {
          name: 'Hermione Granger',
          job: 'Magicienne fullstack',
          picture: '',
     },
];

const server = setupServer(
     // Je précise ici l'url que je vais devoir 'intercepter'.
     rest.get('http://localhost:8000/freelances', (req, res, ctx) => {
          // Là je vais pouvoir lui passer les datas mockées dans ce qui est retourné en json.
          return res(ctx.json({ freelancersList: freelancersMockedData }));
     })
);

/* 1 - J'active la simulation d'API avant les tests depuis 'server'.
2 - Réinitialise tout ce qu'on aurait pu ajouter en termes de durée pour nos tests avant chaque test
3 - Ferme la simulation d'API une fois que les tests sont finis.
Ici,  beforeAll  ,  beforeEach  et  afterEach  n'ont pas besoin d'être importés au même titre que test et describe : ils font partie de l'environnement global de Jest. Vous les trouverez également dans la documentation des  Globals  de Jest. Comme leur nom l'indique : beforeAll  est exécuté avant les tests /beforeEach  est exécuté avant chaque test / et afterEach  est exécuté après chacun des tests. */

// 1
beforeAll(() => server.listen());
// 2
afterEach(() => server.resetHandlers());
// 3
afterAll(() => server.close());

/* ---------- */

/* test('Should render without crash'
    1 - L'ancienne syntaxe :
        render(
                <ThemeProvider>
                    <Freelances />
                </ThemeProvider>
        );
        Nous devons importer 'ThemeProvider' dans tous nos tests car nous utilisons un context. Afin d'avoir une syntaxe plus élégante nous avons créé un 'Wrapper' dans 'utils/test/index.js' ce qui permet la syntaxe suivante : cf code ci-dessous

    2 - 'waitForElementToBeRemoved' est plus adapté à notre code que l'ancienne version de cette ligne :
        'expect(screen.getByTestId('loader')).toBeTruthy();'
        car en plus de vérifier que notre 'loader' s'affiche bien, il va attendre qu'il disparaisse pour passer à la suite du code ce qui correspond parfaitement au comportement attendu dans mon composant 'Freelances'. Si je vais dans mon composant et que je commente le ternaire 'isloading' mon loader sera tout le temps affiché et donc mon test va crasher.

    3 - On va vérifier ici que notre code affiche bien les noms "Harry Potter" et "Hermione Granger".
*/

// Je sais que pendant que mon composant fait l'appel API il affiche un loader, donc je vais vérifier qu'il s'affiche bien.
test('Should render without crash', async () => {
     // 1
     render(<Freelances />);

     // 2
     await waitForElementToBeRemoved(() =>
          expect(screen.getByTestId('loader'))
     );

     // 3
     await waitFor(() => {
          expect(screen.getByText('Harry Potter')).toBeTruthy();
          expect(screen.getByText('Hermione Granger')).toBeTruthy();
     });
});
