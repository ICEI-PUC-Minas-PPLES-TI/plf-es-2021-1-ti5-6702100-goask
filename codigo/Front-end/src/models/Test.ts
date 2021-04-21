export interface Test {
  name: string;
  description: string;
  idCategory: number;
  idUser: number;
  idTest: number;
  createdAt: Date;
  updatedAt: Date;
  questions: Question[];
  category: Category;
}

export interface Question {
  questionText: string;
  idTest: number;
  idQuestion: number;
  answers: Answer[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Answer {
  isCorrect: boolean;
  answerText: string;
  idAnswer: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  name: string;
  idCategory: number;
}
