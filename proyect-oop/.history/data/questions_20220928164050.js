import { Question } from "../models/Question";
import { data } from "./data";

data.map(question => new Question(question.question, question.choices, question.answer));