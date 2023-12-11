const QuizCard = ({ quiz, handleStartQuiz }) => {

    const handleButtonClick = () => {
        handleStartQuiz(quiz);
    }

    return (
    <>
        <h3>{quiz.name}</h3>
        <button onClick={handleButtonClick}>Start Quiz</button>
    </>
    );
};

export default QuizCard;
