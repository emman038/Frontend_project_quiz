import {useNavigate} from "react-router-dom";

const Answer = ({answer, patchNextQuestion, displayOutcome}) => {

    const navigate = useNavigate();

    const handleSubmitAnswer = ()=>{
        patchNextQuestion(answer.id)
        displayOutcome(navigate)
    }

    return ( 
        <li className="answer">
            <p>{answer.answerText}</p>
            <button onClick={handleSubmitAnswer}>Submit</button>
        </li>
    );
}

export default Answer;