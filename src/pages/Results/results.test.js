import { formatJobList, formatQueryParams } from './Results.jsx';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { waitForElementToBeRemoved, screen } from '@testing-library/react';
import { render } from '../../utils/test/index.js';
import Results from '../Results/Results.jsx';

describe('La fonction formatJobList', () => {
     test('ajoute une virgule à un item', () => {
          const expectedState = 'item2,';
          expect(formatJobList('item2', 3, 1)).toEqual(expectedState);
     });
     test('ne met pas de virgule pour le dernier élément', () => {
          const expectedState = 'item3';
          expect(formatJobList('item3', 3, 2)).toEqual(expectedState);
     });
});

// Dans ce test je veux valider le format de deux éléments en entrée et sortie de ma fonction 'formatQueryParams' dans mon composant 'results' :
// 1 - 'answers' qui est l'objet reçu par ma fonction en entrée. Ça correspond aux réponses du questionnaire de l'utilisateur.
// 2 -  ...et 'fetchParams' qui est la const dans laquelle je stock ce que ma fonction 'formatQueryParams' me renvoie en sortie.

describe('The formatQueryParams function', () => {
     it('should use the right format for param', () => {
          const expectedState = 'a1=answer1';
          expect(formatQueryParams({ 1: 'answer1' })).toEqual(expectedState);
     });
     it('should concatenate params with an &', () => {
          const expectedState = 'a1=answer1&a2=answer2';
          expect(formatQueryParams({ 1: 'answer1', 2: 'answer2' })).toEqual(
               expectedState
          );
     });
});

/* ---------- Test call API (cf exemple freealnces.test.js ---------- */
const resultsMockedData = [
     {
          title: 'seo',
          description: `Le SEO est en charge du référencement web d'une page`,
     },
     {
          title: 'frontend',
          description: `Le développeur ou la développeuse frontend se charge de l'interface : interactions avec l'utilisateur, style, etc.`,
     },
];

/* 
1 - Je mets en place ma const 'server' qui va intercepter l'appel à l'api. 

2 - Je définis le comportement de mon server avant les event, après chaque event, après tout les event.

*/

const server = setupServer(
     rest.get('http://localhost:8000/results', (req, res, ctx) => {
          return res(ctx.json({ resultsData: resultsMockedData }));
     })
);

// 2
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('The Results component', () => {
     test('should display the results after the data is loaded', async () => {
          render(<Results />);
          await waitForElementToBeRemoved(() => screen.getByTestId('loader'));
          const jobTitleElements = screen.getAllByTestId('job-title');
          expect(jobTitleElements[0].textContent).toBe('seo');
          expect(jobTitleElements.length).toBe(2);
          const jobDescriptionElements =
               screen.getAllByTestId('job-description');
          expect(jobDescriptionElements[1].textContent).toBe(
               resultsMockedData[1].description
          );
          expect(jobDescriptionElements.length).toBe(2);
     });
});
