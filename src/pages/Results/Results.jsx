import { useContext } from 'react';
import { SurveyContext } from '../../utils/Context/Context';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { useFetch, useTheme } from '../../utils/Hook/Hooks';
import { StyledLink, Loader } from '../../utils/style/Atoms';

const ResultsContainer = styled.div`
     display: flex;
     flex-direction: column;
     align-items: center;
     margin: 60px 90px;
     padding: 30px;
     background-color: ${({ theme }) =>
          theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
`;

const ResultsTitle = styled.h2`
     color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
     font-weight: bold;
     font-size: 28px;
     max-width: 60%;
     text-align: center;
     & > span {
          padding-left: 10px;
     }
`;

const DescriptionWrapper = styled.div`
     padding: 60px;
`;

const JobTitle = styled.span`
     color: ${({ theme }) =>
          theme === 'light' ? colors.primary : colors.backgroundLight};
     text-transform: capitalize;
`;

const JobDescription = styled.div`
     font-size: 18px;
     & > p {
          color: ${({ theme }) =>
               theme === 'light' ? colors.secondary : '#ffffff'};
          margin-block-start: 5px;
     }
     & > span {
          font-size: 20px;
     }
`;

const LoaderWrapper = styled.div`
     display: flex;
     justify-content: center;
`;

/* Cette fonction va récupérer la réponse renvoyer par l'api et va la formater afin de l'afficher comme nous le souhaitons :
1 - je récupère l'objet 'answers
2 - Ensuite j'itère dessus avec un reduce qui va passer sur les clès de notre objet. En params je récupère le string pécédente (previousParams) et le numéro de la réponse :
     2.a - S'il s'ajit de la première réponse on rajoute un espace sinon on rajoute un '&' */
function formatFetchParams(answers) {
     // 1
     const answerNumbers = Object.keys(answers);
     // 2
     return answerNumbers.reduce((previousParams, answerNumber, index) => {
          const isFirstParam = index === 0;
          // 2.a
          const separator = isFirstParam ? '' : '&';
          // je récupère cette data dans mon usefetch plus bas.
          return `${previousParams}${separator}a${answerNumber}=${answers[answerNumber]}`;
     }, '');
}

function Results() {
     const { theme } = useTheme();
     const { answers } = useContext(SurveyContext);
     const fetchParams = formatFetchParams(answers);

     /* Le hook custum 'useFetch' me permet de faire l'appel à l'api et fetchParams correspond à mes réponses.*/
     const { data, isLoading, error } = useFetch(
          `http://localhost:8000/results?${fetchParams}`
     );

     console.log('===== data =====', data);

     if (error) {
          return <span>Il y a un problème</span>;
     }

     const resultsData = data?.resultsData;

     return isLoading ? (
          <LoaderWrapper>
               <Loader />
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
                                   {result.title}
                                   {index === resultsData.length - 1 ? '' : ','}
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
                                   <JobTitle theme={theme}>
                                        {result.title}
                                   </JobTitle>
                                   <p>{result.description}</p>
                              </JobDescription>
                         ))}
               </DescriptionWrapper>
          </ResultsContainer>
     );
}

export default Results;
