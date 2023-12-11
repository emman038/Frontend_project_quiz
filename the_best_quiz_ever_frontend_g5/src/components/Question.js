const Question = ({activeQuestion}) => {

    const checkActiveQuestion = () => {
        if(activeQuestion){
            return (
            <>
            <h2>{activeQuestion.nextQuestion.questionText}</h2>
            </>
            ) 
        } else {
            return <p>Loading...</p>
        }
    } 
    // console.log(activeQuestion.nextQuestion.questionText);

    return ( 
        <>
        {checkActiveQuestion()}
        </>
    );

}

export default Question;