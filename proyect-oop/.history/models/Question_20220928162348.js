
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

console.log(question.correctAnswer());