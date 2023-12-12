
import Answer from "./Answer"

const Question = ({ activeQuestion, patchNextQuestion, currentResult}) => {

    if (!activeQuestion) {
        return <p>No active quiz right now, please start a quiz</p>;
    }

    const answerComponents = activeQuestion.nextQuestion.answers.map((answer) => {
        console.log(answer)
        return (<Answer answer={answer} key={answer.id} patchNextQuestion={patchNextQuestion} activeQuestion={activeQuestion} currentResult={currentResult}/>)
    })

    return (
        <>
            <h2>{activeQuestion.nextQuestion.questionText}</h2>
            <ul>{answerComponents}</ul>
        </>
    );

}

export default Question;