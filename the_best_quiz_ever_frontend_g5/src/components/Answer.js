const Answer = ({answer, patchNextQuestion}) => {

    const handleSubmitAnswer = ()=>{
        patchNextQuestion(answer.id)
    }

    return ( 
        <li className="answer">
            <p>{answer.answerText}</p>
            <button onClick={handleSubmitAnswer}>Submit</button>
        </li>
    );
}

export default Answer;