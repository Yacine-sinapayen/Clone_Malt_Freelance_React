import { formatJobList, formatQueryParams } from './Results.jsx';

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

// Dans ce test je veux valider le format de deux éléments en entrée et sortie de ma fonction 'formatQueryParams' dans mon composant results :
// 1 - 'answers' qui est l'objet reçu par ma fonction en entrée. Ça correspond aux réponses du questionnaire de l'utilisateur
// 2 -  et 'fetchParams' qui est la const dans laquelle je stock ce que ma fonction 'formatQueryParams' me renvoie en sortie.

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
