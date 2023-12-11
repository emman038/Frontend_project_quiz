import { act } from "react-dom/test-utils"
import Answer from "./Answer"

const Question = ({activeQuestion}) => {

    // const checkActiveQuestion = () => {
    //     const answerComponents = activeQuestion.nextQuestion.answers.map ((answer) => {
    //         return <Answer answer={answer} key={answer.id}/>
    //     })
    //     if(activeQuestion){
    //         return (
    //         <>
    //         <h2>{activeQuestion.nextQuestion.questionText}</h2>
    //         <ul>{activeQuestion ? checkActiveQuestion() : <p>Loading... </p> }</ul>
    //         </>
    //         ) 
    //     } else {
    //         return <p>Loading...</p>
    //     }
    // } 

    
    
    const checkAnswerComponents = () => {
        if (activeQuestion) {
            const answerComponents = activeQuestion.nextQuestion.answers.map ((answer) => {
                return <Answer answer={answer} key={answer.id}/>
            })
        } else {
            <p>Loading...</p>
        }
    }

    
    return ( 
        <>
        {activeQuestion ? <h2>{activeQuestion.nextQuestion.questionText}</h2> :<p>Loading...</p> }
        {activeQuestion ? checkAnswerComponents(): <p>Test</p>}
        </>
    );

}

export default Question;