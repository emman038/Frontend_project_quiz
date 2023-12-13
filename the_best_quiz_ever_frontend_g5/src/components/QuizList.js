import QuizCard from "./QuizCard";

const QuizList = ({quizList, handleStartQuiz, findCurrentQuestion}) => {

    const quizComponents = quizList.map((quiz) => {
        return <QuizCard key={quiz.id} quiz={quiz} handleStartQuiz={handleStartQuiz} findCurrentQuestion={findCurrentQuestion} />
    })

    return ( 
        <>
            <h2>Hello from QuizList</h2>
            {quizList ? quizComponents : <p>Loading</p>}
        </>
    );
}

export default QuizList;