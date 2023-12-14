import { useNavigate } from "react-router-dom";

const QuizCard = ({ quiz, handleStartQuiz, findCurrentQuestion }) => {

    const navigate = useNavigate();

    const handleButtonClick = () => {
        handleStartQuiz(quiz);
        navigate("/question");
    }

    const generateResumeClick = () => {
        if (quiz.currentQuestion > 1 && quiz.currentQuestion <= 5) {
            return (<button className="quiz-button" onClick={resumeQuizClick}>Resume Quiz</button>)
        }
    }

    const resumeQuizClick = () => {
        findCurrentQuestion(quiz);
        navigate("/question");
    }

    const generateImage = () => {
        const quizName = quiz.name;
        const imageClassName = quizName.toLowerCase().split(/[\s]+/).join("-");
        return imageClassName;
    }

    return (
        <article>

            <div className="quiz-card first-color">
                <h3 className="quiz-title">{quiz.name}</h3>
                <div className={generateImage()}> </div>
                <button className="quiz-button" onClick={handleButtonClick}>Start Quiz</button>
                {generateResumeClick()}
            </ div>

        </article>
    );
};

export default QuizCard;
