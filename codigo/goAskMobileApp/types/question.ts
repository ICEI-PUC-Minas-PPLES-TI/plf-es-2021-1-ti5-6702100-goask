export interface IQuestion {
  questionText: string;
  createdAt: string;
  updatedAt: string;
  idQuestion?: number;
  answers: IAnswer[];
}

export interface IAnswer {
  isCorrect: boolean;
  answerText: string;
  createdAt: string;
  updatedAt: string;
  idAnswer?: number;
}
