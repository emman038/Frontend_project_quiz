import Answer from "./Answer"
import ModalResult from "./ModalResult";

const Question = ({ activeQuestion, patchNextQuestion, currentResult, imageUrl}) => {

    if(currentResult){
        return (
           <>
            <ModalResult currentResult={currentResult} imageUrl={imageUrl}/>
           </>
        )
    }

    if (!activeQuestion) {
        return <p>No active quiz right now, please start a quiz</p>;
    }

    // Map the answers for the question
    const answerComponents = activeQuestion.nextQuestion.answers.map((answer) => {
        return (<Answer 
            answer={answer} 
            key={answer.id} 
            patchNextQuestion={patchNextQuestion} 
            activeQuestion={activeQuestion} 
            currentResult={currentResult}/>)
    })

    return (
        <div className="question-container">
            <h2 className="question-text">{activeQuestion.nextQuestion.questionText}</h2>
            <ul className="answer-container">{answerComponents}</ul>
        </div>
    );

}

export default Question;