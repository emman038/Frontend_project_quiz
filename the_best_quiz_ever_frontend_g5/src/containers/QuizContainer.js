import Question from "../components/Question";
import QuizList from "../components/QuizList";
import Result from "../components/Result";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";

const QuizContainer = () => {


const [quizList, setQuizList] = useState([]);
const [currentQuiz, setCurrentQuiz] = useState({}); // not useful right now. Potentially in the future. 
const [quizStarted, setQuizStarted] = useState(false);



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
}

const handleStartQuiz = (quiz) => {
    const quizId = {
        id: quiz.id
    }
    fetchStartQuiz(quizId);
    setQuizStarted(true);

}






    return ( 
        <>
            <h1>Hello from Container</h1>
            {quizStarted ? <Question /> : <QuizList quizList={quizList} handleStartQuiz={handleStartQuiz} />}

        </>
    );
}

export default QuizContainer;