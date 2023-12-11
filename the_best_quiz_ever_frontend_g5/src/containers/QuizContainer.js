import Question from "../components/Question";
import QuizList from "../components/QuizList";
import Result from "../components/Result";

const QuizContainer = () => {
    return ( 
        <>
            <h1>Hello from Container</h1>
            <QuizList />
            <Question />
            <Result />
        </>
     );
}
 
export default QuizContainer;