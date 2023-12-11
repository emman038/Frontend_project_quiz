import { useNavigate } from "react-router-dom";

const QuizCard = ({ quiz, handleStartQuiz}) => {

    const navigate = useNavigate();

    const handleButtonClick = () => {
        handleStartQuiz(quiz);
        navigate("/question");
    }

    return (
    <>
        <h3>{quiz.name}</h3>
        <button onClick={handleButtonClick}>Start Quiz</button>
    </>
    );
};

export default QuizCard;
