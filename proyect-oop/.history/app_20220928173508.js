import { newQuestions } from "./data/questions.js"
import { Quiz } from "./models/Quiz.js"
import { Ui} from "./models/Ui.js"


/**
 * 
 * @param {Quiz} quiz the main quiz object
 * @param {Ui} ui the ui Object
 */
const renderPage = (quiz, ui) => {

    ui.showQuestion(quiz.getQuestionIndex().text);
    ui.showChoices(quiz.getQuestionIndex().choices, (choices) => {
        quiz.guess(choices)
        renderPage(quiz, ui)
    });
}

function main(){
    const quiz = new Quiz(newQuestions)
    const ui = new Ui()
   renderPage(quiz, ui)
}
main()