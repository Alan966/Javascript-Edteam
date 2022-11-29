export class Ui {
    constructor( text){
        this.text = text;
    }

    /**
     * 
     * @param {string} text question to render
     */
    showQuestion(text){
        const questionTitle = document.getElementById('question ')
        questionTitle.innerHTML = text;
    }
}