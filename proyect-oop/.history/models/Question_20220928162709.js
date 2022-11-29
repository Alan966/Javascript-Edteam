
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

const question = new Question('Cual es x cosa ?', ['sdfghjk', 'sdfghjkl'], 'esta es la respuesta');
console.log(question)