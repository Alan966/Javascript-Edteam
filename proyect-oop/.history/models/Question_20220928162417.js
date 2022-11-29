
class Question {
    constructor(){
        this.text = 'alguna pregunta';
        this.choices = ['asdsd', 'assd'];
        this.answer= 'adddff';
    }

    correctAnswer(){
        return true;
    }
}

const question = new Question();
const question2 = new Question();

console.log(question.correctAnswer());
consope.log(question2.correctAnswer);