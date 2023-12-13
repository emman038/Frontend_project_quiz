import { useNavigate } from "react-router-dom";

const QuizCard = ({ quiz, handleStartQuiz, findCurrentQuestion }) => {

    const navigate = useNavigate();

    const handleButtonClick = () => {
        handleStartQuiz(quiz);
        navigate("/question");
    }

    const generateResumeClick = () => {
        if (quiz.currentQuestion > 1 && quiz.currentQuestion <= 5) {
            return (<button onClick={resumeQuizClick}>Resume Quiz</button>)
        }
    }

    const resumeQuizClick = () => {
        findCurrentQuestion(quiz);
        navigate("/question");
    }


    return (
        <>
            <h3>{quiz.name}</h3>
            <button onClick={handleButtonClick}>Start Quiz</button>
            {generateResumeClick()}
        </>
    );
};

export default QuizCard;
