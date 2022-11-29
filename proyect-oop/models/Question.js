
export class Question {

    /**
     * 
     * @param {string} text this is the question text
     * @param {string{}} choices  this are the choices of the question
     * @param {string} answer this is the answer of the question
     */

    constructor(text, choices, answer){
        this.text = text;
        this.choices = choices;
        this.answer= answer;
    }

    /**
     * 
     * @param {string} choice some text to guess
     * @returns return true if the anmswer is correct
     */
    correctAnswer(choice){
        return choice === this.answer;
    }
}