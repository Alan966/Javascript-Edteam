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
}