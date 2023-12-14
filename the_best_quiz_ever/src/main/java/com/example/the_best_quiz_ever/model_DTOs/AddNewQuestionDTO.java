package com.example.the_best_quiz_ever.model_DTOs;

public class AddNewQuestionDTO {


    private Long quizId;

    private String questionText;




    public AddNewQuestionDTO(Long quizId, String questionText) {
        this.quizId = quizId;
        this.questionText = questionText;
    }

    public AddNewQuestionDTO() {
    }

    public Long getQuizId() {
        return quizId;
    }

    public void setQuizId(Long quizId) {
        this.quizId = quizId;
    }

    public String getQuestionText() {
        return questionText;
    }

    public void setQuestionText(String questionText) {
        this.questionText = questionText;
    }
}
