import { Question } from "../models/Question";
import { data } from "./data";

export const newQuestions = data.map(question => new Question(question.question, question.choices, question.answer));
