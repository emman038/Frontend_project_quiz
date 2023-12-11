import Question from "../components/Question";
import QuizList from "../components/QuizList";
import Result from "../components/Result";
import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Template from "../components/Template";

const QuizContainer = () => {

const [quizList, setQuizList] = useState([]);
const [currentQuiz, setCurrentQuiz] = useState({}); // not useful right now. Potentially in the future. 
const [activeQuestion, setActiveQuestion] = useState(null);


const fetchQuizList = async () => {
    const response = await fetch("http://localhost:8080/quizzes");
    const data = await response.json();
    setQuizList(data);
}

useEffect(() => {
    fetchQuizList();
}, [])


const fetchStartQuiz = async (quizId) => {
    const response = await fetch("http://localhost:8080/quizzes/start-new-game", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(quizId)
    })
    const data = await response.json();
    setActiveQuestion(data);
}

const handleStartQuiz = (quiz) => {
    const quizId = {
        id: quiz.id
    }
    fetchStartQuiz(quizId);
}

const quizRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Template/>,
        children: [
            {
                path: "/",
                element: <QuizList quizList={quizList} handleStartQuiz={handleStartQuiz}/>
            },
            {
                path: "/question",
                element: <Question activeQuestion={activeQuestion}/>
            },
            {
                path: "/result",
                element: <Result/>
            }
        ]
    }
]);

    return ( 
        <>
            <RouterProvider router={quizRoutes}/>
        </>
    );
}

export default QuizContainer;