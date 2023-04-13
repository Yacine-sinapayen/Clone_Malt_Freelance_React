import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../utils/style/colors';
import { Loader } from '../utils/style/Atoms';
import { SurveyContext } from '../utils/Context/Context';

const SurveyContainer = styled.div`
     display: flex;
     flex-direction: column;
     align-items: center;
`;

const QuestionTitle = styled.h2`
     text-decoration: underline;
     text-decoration-color: ${colors.primary};
`;

const QuestionContent = styled.span`
     margin: 30px;
`;

const LinkWrapper = styled.div`
     padding-top: 30px;
     & a {
          color: black;
     }
     & a:first-of-type {
          margin-right: 20px;
     }
`;

const ReplyWrapper = styled.button`
     border: none;
     height: 100px;
     width: 300px;
     display: flex;
     align-items: center;
     justify-content: center;
     background-color: ${colors.backgroundLight};
     border-radius: 30px;
     cursor: pointer;
     box-shadow: ${(props) =>
          props.isSelected
               ? `0px 0px 0px 2px ${colors.primary} inset`
               : 'none'};
     &:first-child {
          margin-right: 15px;
     }
     &:last-of-type {
          margin-left: 15px;
     }
`;

const ReplyBox = styled.div`
     display: flex;
     flex-direction: row;
     margin: 20px;
`;

function Survey() {
     const { questionNumber } = useParams();
     const questionNumberInt = parseInt(questionNumber);
     // Si ma question actuel est égale à 1 alors je ne eut pas revenir en arrière et donc je renvoie '1' sion je reviens à la question précédente.
     const prevQuestionNumber =
          questionNumberInt === 1 ? 1 : questionNumberInt - 1;
     const nextQuestionNumber = questionNumberInt + 1;
     const [isDataLoading, setIsDataLoading] = useState(false);
     const [surveyData, setSurveyData] = useState({});
     const { answers, saveAnswers } = useContext(SurveyContext);
     const [error, setError] = useState(null);

     function saveReply(answer) {
          saveAnswers({ [questionNumber]: answer });
     }

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

     // Méthode plus moderne pour faire un appel Api
     useEffect(() => {
          async function fetchSurvey() {
               try {
                    setIsDataLoading(true);
                    const response = await fetch(
                         `http://localhost:8000/survey`
                    );
                    // surveyData est une propriété de l'objet qui est retourné donc il faut destricturé avec les {}.
                    const { surveyData } = await response.json();
                    setSurveyData(surveyData);
               } catch (error) {
                    console.log(error);
                    setError(true);
               } finally {
                    setIsDataLoading(false);
               }
          }
          fetchSurvey();
     }, []);

     if (error) {
          return <span>Oups il y a eu un problème</span>;
     }

     return (
          <SurveyContainer>
               <QuestionTitle>Question {questionNumber}</QuestionTitle>
               {isDataLoading ? (
                    <Loader />
               ) : (
                    <QuestionContent>
                         {surveyData[questionNumber]}
                    </QuestionContent>
               )}

               <ReplyWrapper>
                    <ReplyBox
                         onClick={() => saveReply(true)}
                         isSelected={answers[questionNumber] === true}
                    >
                         Oui
                    </ReplyBox>
                    <ReplyBox
                         onClick={() => saveReply(false)}
                         isSelected={answers[questionNumber] === false}
                    >
                         Non
                    </ReplyBox>
               </ReplyWrapper>
               <LinkWrapper>
                    <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
                    {surveyData[questionNumberInt + 1] ? (
                         <Link to={`/survey/${nextQuestionNumber}`}>
                              Suivant
                         </Link>
                    ) : (
                         <Link to="/results">Résultats</Link>
                    )}
               </LinkWrapper>
          </SurveyContainer>
     );
}

export default Survey;
