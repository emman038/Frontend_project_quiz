import QuizCard from "./QuizCard";

const QuizList = ({quizList, handleStartQuiz, findCurrentQuestion}) => {

    const quizComponents = quizList.map((quiz) => {
        return <QuizCard key={quiz.id} quiz={quiz} handleStartQuiz={handleStartQuiz} findCurrentQuestion={findCurrentQuestion} />
    })


    return ( 
        <>
            <h2 className="list-of-quizzes">Quizzes</h2>
            <div className="quizzes"> {quizList ? quizComponents : <p>Loading</p>} </div>
        </>
    );
}

export default QuizList;