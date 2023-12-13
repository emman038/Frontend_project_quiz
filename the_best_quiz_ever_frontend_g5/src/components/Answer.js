import {useNavigate} from "react-router-dom";
import { useEffect } from "react";

const Answer = ({answer, patchNextQuestion, activeQuestion, currentResult}) => {

    // const navigate = useNavigate();

    // useEffect(()=>{
    //     if(currentResult){
    //         navigate("/result")
    //     }
    // },[currentResult, activeQuestion]);

    const handleSubmitAnswer = ()=>{
        patchNextQuestion(answer.id);
    };

    return ( 
        <li className="answer">
            <p>{answer.answerText}</p>
            <button onClick={handleSubmitAnswer}>Submit</button>
        </li>
    );
}

export default Answer;