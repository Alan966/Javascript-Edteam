
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
const question3 = new Question();
const question4 = new Question();


console.log(question, question2, question3, question4);