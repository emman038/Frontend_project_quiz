const Answer = ({answer}) => {

    return ( 
        <li className="answer">
            <p>{answer.answerText}</p>
            <button>Submit</button>
        </li>
    );
}

export default Answer;