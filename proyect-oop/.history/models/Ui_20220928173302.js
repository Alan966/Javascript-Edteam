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
    showChoices(choices, callback){
        const choicesContainer = document.getElementById('choices')
        choicesContainer.innerHTML = '';


        for(let i = 0; i < choices.length ; i++){
            const button = document.createElement('button')
            button.setAttribute('class', 'button')
            button.innerHTML = choices[i]

            button.addEventListener('click', () => {
                callback(choices[i])
            })

            choicesContainer.appendChild(button)
        }
    }
}