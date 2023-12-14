package com.example.the_best_quiz_ever.model_DTOs;

public class AddNewAnswerDTO {


    private Long questionId;

    private Long outcomeId;

    private String answerText;

    public AddNewAnswerDTO(Long questionId, Long outcomeId, String answerText) {
        this.questionId = questionId;
        this.outcomeId = outcomeId;
        this.answerText = answerText;
    }

    public AddNewAnswerDTO() {
    }

    public Long getQuestionId() {
        return questionId;
    }

    public void setQuestionId(Long questionId) {
        this.questionId = questionId;
    }

    public Long getOutcomeId() {
        return outcomeId;
    }

    public void setOutcomeId(Long outcomeId) {
        this.outcomeId = outcomeId;
    }

    public String getAnswerText() {
        return answerText;
    }

    public void setAnswerText(String answerText) {
        this.answerText = answerText;
    }
}
