import { newQuestions } from "./data/questions.js"
import { Quiz } from "./models/Quiz.js"
import { Ui} from "./models/Ui.js"


/**
 * 
 * @param {Quiz} quiz the main quiz object
 * @param {Ui} ui the ui Object
 */
const renderPage = (quiz, ui) => {
    if(quiz.isEnded()){
        console.log(quiz.score)
        ui.showScores(quiz.score)
    }else{
        ui.showQuestion(quiz.getQuestionIndex().text);
    ui.showChoices(quiz.getQuestionIndex().choices, (choices) => {
        quiz.guess(choices)
        renderPage(quiz, ui)
    });
    ui.showProgress(quiz.questionIndex, quiz.questions.length)
    }


}

function main(){
    const quiz = new Quiz(newQuestions)
    const ui = new Ui()
   renderPage(quiz, ui)
}
main()