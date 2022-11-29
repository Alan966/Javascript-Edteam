
class Question {
    constructor(text, choices, answer){
        this.text = text;
        this.choices = choices;
        this.answer= answer;
    }

    correctAnswer(choice){
        return choice === this.answer;
    }
}

const question = new Question('Cual es un lenguaje de programacion?', ['html', 'c'], 'c');
console.log(question.correctAnswer('c'));