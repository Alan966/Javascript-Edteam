
class Question {
    constructor(text, choices, answer){
        this.text = text;
        this.choices = choices;
        this.answer= answer;
    }

    correctAnswer(){
        return true;
    }
}

const question = new Question();
const question2 = new Question();

console.log(question.correctAnswer());
console.log(question2.correctAnswer);