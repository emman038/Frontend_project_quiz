package com.example.the_best_quiz_ever.model_DTOs;

public class AddNewOutcomeDTO {


    private Long quizId;

    private String outcomeText;


    public AddNewOutcomeDTO(Long quizId, String outcomeText) {
        this.quizId = quizId;
        this.outcomeText = outcomeText;
    }

    public AddNewOutcomeDTO() {
    }


    public Long getQuizId() {
        return quizId;
    }

    public void setQuizId(Long quizId) {
        this.quizId = quizId;
    }

    public String getOutcomeText() {
        return outcomeText;
    }

    public void setOutcomeText(String outcomeText) {
        this.outcomeText = outcomeText;
    }
}
