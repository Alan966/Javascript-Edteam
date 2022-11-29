import { newQuestions } from "./data/questions.js"
import { Quiz } from "./models/Quiz.js"
import { Ui} from "./models/Ui.js"


function main(){
    const quiz = new Quiz(newQuestions)
    const ui = new Ui()

    ui.showQuestion(quiz.getQuestionIndex().text);
    ui.showChoices(quiz.getQuestionIndex().choices), () => {
        quiz.guess()
    };
}
main()