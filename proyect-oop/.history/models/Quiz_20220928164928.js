export class Quiz{

    questionIndex = 0

    constructor(questions){
        this.questions = questions;
    }

    getQuestionIndex(){
        return this.questions[this.questionIndex];
    }
}


