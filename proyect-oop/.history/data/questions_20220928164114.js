import { Question } from "../models/Question";
import { data } from "./data";

const newQuestions = data.map(question => new Question(question.question, question.choices, question.answer));
console.log(newQuestions);