export interface PostTest {
  name: string;
  description: string;
  idCategory: number;
  idUser: number;
}
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

export interface PostQuestion {
  questionText: string;
  idTest: number;
  answers: PostAnswer[];
}

export interface PostAnswer {
  isCorrect: boolean;
  answerText: string;
}

export interface PutQuestion {
  questionText: string;
  idTest: number;
  answers: PutAnswer[];
}

export interface PutAnswer {
  isCorrect: boolean;
  answerText: string;
  idAnswer: number;
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
