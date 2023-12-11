
import Answer from "./Answer"

const Question = ({activeQuestion}) => {

    if (!activeQuestion) {
        return <p>Loading...</p>;
    }

    const answerComponents = activeQuestion.nextQuestion.answers.map ((answer) => {
                console.log(answer)
                return (<Answer answer={answer} key={answer.id}/>)
            })
        
    return ( 
        <>
        <h2>{activeQuestion.nextQuestion.questionText}</h2>
        {answerComponents}
        </>
    );

}

export default Question;