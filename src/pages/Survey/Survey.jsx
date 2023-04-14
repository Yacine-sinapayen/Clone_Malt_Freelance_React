import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { Loader } from '../../utils/style/Atoms';
import { SurveyContext } from '../../utils/Context/Context';
import { useFetch, useTheme } from '../../utils/Hook/Hooks'

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const QuestionContent = styled.span`
  margin: 30px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`

const ReplyBox = styled.button`
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};
  &:first-child {
    margin-right: 15px;
  }
  &:last-of-type {
    margin-left: 15px;
  }
`

const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
const SpanError = styled.span`
margin: 15px;
`

function Survey() {
      // Ancien stte du call api
     // const [isDataLoading, setIsDataLoading] = useState(false);
     // const [surveyData, setSurveyData] = useState({});

     // 1 - Méthode oldSchool pour faire appel api
     // useEffect(() => {
     //      // Je lance mon loader au début du chargement des données.
     //      setIsDataLoading(true);
     //      fetch(`http://localhost:8000/survey`)
     //           .then((res) => res.json())
     //           .then(({ surveyData }) => {
     //                setSurveyData(surveyData);
     //                setIsDataLoading(false);
     //           })
     //           .catch((error) => console.log(error));
     //      // J'arrête mon loader à la fin du chargement des données.
     // }, []);

     // 2 - Méthode plus moderne pour faire un appel Api
     // useEffect(() => {
     //      async function fetchSurvey() {
     //           try {
     //                setIsDataLoading(true);
     //                const response = await fetch(
     //                     `http://localhost:8000/survey`
     //                );
     //                // surveyData est une propriété de l'objet qui est retourné donc il faut destricturé avec les {}.
     //                const { surveyData } = await response.json();
     //                setSurveyData(surveyData);
     //           } catch (error) {
     //                console.log(error);
     //                setError(true);
     //           } finally {
     //                setIsDataLoading(false);
     //           }
     //      }
     //      fetchSurvey();
     // }, []);

     const { questionNumber } = useParams();
     const questionNumberInt = parseInt(questionNumber);
     // Si ma question actuel est égale à 1 alors je ne eut pas revenir en arrière et donc je renvoie '1' sion je reviens à la question précédente.
     const prevQuestionNumber =
          questionNumberInt === 1 ? 1 : questionNumberInt - 1;
     const nextQuestionNumber = questionNumberInt + 1;
     const { theme } = useTheme();
     const { answers, saveAnswers } = useContext(SurveyContext);

    
     // 3 - Méthode à mettre en place pour faire un appel Api avec mon hook personnalisé useFetch dispo dans 'utils/Hook/Hooks' :
     
     function saveReply(answer) {
          saveAnswers({ [questionNumber]: answer });
     }

     const { data, isLoading, error } = useFetch(`http://localhost:8000/survey`);
     
     const surveyData = data?.surveyData;

     if (error) {
          return <SpanError>Oups il y a eu un problème</SpanError>;
     }

     return (
          <SurveyContainer>
            <QuestionTitle theme={theme}>Question {questionNumber}</QuestionTitle>
            {isLoading ? (
              <Loader />
            ) : (
              <QuestionContent theme={theme}>
                {surveyData[questionNumber]}
              </QuestionContent>
            )}
            <ReplyWrapper>
              <ReplyBox
                onClick={() => saveReply(true)}
                isSelected={answers[questionNumber] === true}
                theme={theme}
              >
                Oui
              </ReplyBox>
              <ReplyBox
                onClick={() => saveReply(false)}
                isSelected={answers[questionNumber] === false}
                theme={theme}
              >
                Non
              </ReplyBox>
            </ReplyWrapper>
            <LinkWrapper theme={theme}>
              <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
              {surveyData && surveyData[questionNumberInt + 1] ? (
                <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
              ) : (
                <Link to="/results">Résultats</Link>
              )}
            </LinkWrapper>
          </SurveyContainer>
        )
}

export default Survey;
