package com.example.the_best_quiz_ever.model_DTOs;

public class AddNewQuizDTO {


    private String name;


    public AddNewQuizDTO(String name) {
        this.name = name;
    }


    public AddNewQuizDTO() {
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
