import Question from "../components/Question";
import QuizList from "../components/QuizList";
import Result from "../components/Result";
import { useEffect, useState } from "react";

const QuizContainer = () => {


const [quizList, setQuizList] = useState([]);
const [currentQuiz, setCurrentQuiz] = useState({});


const fetchQuizList = async () => {
    const response = await fetch("http://localhost:8080/quizzes");
    const data = await response.json();
    setQuizList(data);
}

useEffect(() => {
    fetchQuizList();
}, [])









    return ( 
        <>
            <h1>Hello from Container</h1>
            <QuizList quizList={quizList} />
            <Question />
            <Result />
        </>
     );
}
 
export default QuizContainer;