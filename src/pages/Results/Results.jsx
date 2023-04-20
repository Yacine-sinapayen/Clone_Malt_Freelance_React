import { useContext } from 'react';
import { SurveyContext } from '../../utils/Context/Context';
import { useFetch, useTheme } from '../../utils/Hook/Hooks';
import { StyledLink, Loader } from '../../utils/style/Atoms';
import { ResultsContainer, ResultsTitle, DescriptionWrapper, JobTitle, JobDescription, LoaderWrapper } from './resultsStyle';
import EmptyList from '../../components/EmptyList/EmptyList';

/* Cette fonction va récupérer la réponse renvoyée par l'api et va la formater afin de l'afficher comme nous le souhaitons :
1 - Je récupère l'objet 'answers'
2 - Ensuite j'itère dessus avec un 'reduce' qui va passer sur les clés de notre objet. En params je récupère le 'string' pécédent (previousParams) et le numéro de la réponse :
     2.a - S'il s'agit de la première réponse on rajoute un espace sinon on rajoute un '&' */
export function formatQueryParams(answers) {
     // 1
     const answerNumbers = Object.keys(answers);
     // 2
     return answerNumbers.reduce((previousParams, answerNumber, index) => {
          const isFirstParam = index === 0;
          // 2.a
          const separator = isFirstParam ? '' : '&';
          // Je récupère cette data dans mon 'usefetch' plus bas.
          return `${previousParams}${separator}a${answerNumber}=${answers[answerNumber]}`;
     }, '');
}

export function formatJobList(title, listLength, index) {
     if (index === listLength - 1) {
          return title;
     } else {
          return `${title},`;
     }
}

function Results() {
     const { answers } = useContext(SurveyContext);
     const fetchParams = formatQueryParams(answers);
     const { theme } = useTheme();
     console.log(fetchParams);

     /* Le hook custum 'useFetch' me permet de faire l'appel à l'api et 'fetchParams' correspond à mes réponses.*/
     const { data, isLoading, error } = useFetch(
          `http://localhost:8000/results?${fetchParams}`
     );

     console.log('===== data =====', data);

     if (error) {
          return <span>Il y a un problème</span>;
     }

     const resultsData = data?.resultsData;

     if (resultsData?.length < 1) {
          return <EmptyList theme={theme} />
        }

     return isLoading ? (
          <LoaderWrapper>
               <Loader data-testid="loader" />
          </LoaderWrapper>
     ) : (
          <ResultsContainer theme={theme}>
               <ResultsTitle theme={theme}>
                    Les compétences dont vous avez besoin :
                    {resultsData &&
                         resultsData.map((result, index) => (
                              <JobTitle
                                   key={`result-title-${index}-${result.title}`}
                                   theme={theme}
                              >
                                   {formatJobList(
                                        result.title,
                                        resultsData.length,
                                        index
                                   )}
                              </JobTitle>
                         ))}
               </ResultsTitle>
               <StyledLink $isFullLink to="/freelances">
                    Découvrez nos profils
               </StyledLink>
               <DescriptionWrapper>
                    {resultsData &&
                         resultsData.map((result, index) => (
                              <JobDescription
                                   theme={theme}
                                   key={`result-detail-${index}-${result.title}`}
                              >
                                   <JobTitle
                                        theme={theme}
                                        data-testid="job-title"
                                   >
                                        {result.title}
                                   </JobTitle>
                                   <p data-testid="job-description">
                                        {result.description}
                                   </p>
                              </JobDescription>
                         ))}
               </DescriptionWrapper>
          </ResultsContainer>
     );
}

export default Results;
