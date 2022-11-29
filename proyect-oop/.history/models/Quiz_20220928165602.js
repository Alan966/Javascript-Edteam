// @ts-check
import { Question } from "./Question";

export class Quiz{

    questionIndex = 0
    score = 0

    /**
     * 
     * @param {Question[]} questions 
     */

    constructor(questions){
        this.questions = questions;
    }

    /**
     * 
     * @returns {Question} que question found
     */
    getQuestionIndex(){
        return this.questions[this.questionIndex];
    }

    /**
     * 
     * @param {number} answer some text
     */
    guess(answer){

        if(this.getQuestionIndex().correctAnswer(answer)){
            this.score++;
        }
        this.questionIndex++;
    }
}



