const Answer = ({answer}) => {

    return ( 
        <li className="answer">
            <p>{answer.text}</p>
            <button></button>
        </li>
    );
}

export default Answer;