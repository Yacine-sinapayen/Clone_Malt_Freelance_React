import { Link, useParams } from 'react-router-dom';

function Survey() {
     const { questionNumber } = useParams();
     
     const questionNumberInt = parseInt(questionNumber);
     // Si ma question actuel est égale à 1 alors je ne eut pas revenir en arrière et donc je renvoie '1' sion je reviens à la question précédente.
     const prevQuestionNumber =
          questionNumberInt === 1 ? 1 : questionNumberInt - 1;
     const nextQuestionNumber = questionNumberInt + 1;

     return (
          <div>
               <h1>Questionnaire</h1>
               <h2> Question {questionNumber}</h2>
               <Link to={`/survey/${prevQuestionNumber}`}> Précédent </Link>
               {questionNumber === 10 ? (
                    <Link to={`/results`}>Résultats</Link>
               ) : (
                    <Link to={`/survey/${nextQuestionNumber}`}>Suivante</Link>
               )}
          </div>
     );
}

export default Survey;
