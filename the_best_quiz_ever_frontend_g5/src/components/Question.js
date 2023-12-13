import Answer from "./Answer"
import ModalResult from "./ModalResult";

const Question = ({ activeQuestion, patchNextQuestion, currentResult}) => {

    if(currentResult){
        return (
           <>
            <ModalResult currentResult={currentResult}/>
           </>
        )
    }

    if (!activeQuestion) {
        return <p>No active quiz right now, please start a quiz</p>;
    }

    const answerComponents = activeQuestion.nextQuestion.answers.map((answer) => {
        console.log(answer)
        return (<Answer answer={answer} key={answer.id} patchNextQuestion={patchNextQuestion} activeQuestion={activeQuestion} currentResult={currentResult}/>)
    })

    return (
        <div className="question-container">
            <h2>{activeQuestion.nextQuestion.questionText}</h2>
            <ul className="answer-container">{answerComponents}</ul>
        </div>
    );

}

export default Question;