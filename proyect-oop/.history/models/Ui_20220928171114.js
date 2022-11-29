export class Ui {
    constructor(){
    }

    /**
     *
     * @param {string} text question to render
     */
    showQuestion(text){
        const questionTitle = document.getElementById('question')
        questionTitle.innerHTML = text;
    }

    /**
     * 
     * @param {string[]} choices the choices of the question
     */
    showChoices(choices){
        const choicesContainer = document.getElementById('choices')
        console.log(choicesContainer)
    }
}