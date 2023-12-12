
import Answer from "./Answer"

const Question = ({ activeQuestion, patchNextQuestion }) => {

    if (!activeQuestion) {
        return <p>Loading...</p>;
    }

    const answerComponents = activeQuestion.nextQuestion.answers.map((answer) => {
        console.log(answer)
        return (<Answer answer={answer} key={answer.id} patchNextQuestion={patchNextQuestion}/>)
    })

    return (
        <>
            <h2>{activeQuestion.nextQuestion.questionText}</h2>
            <ul>{answerComponents}</ul>
        </>
    );

}

export default Question;