export interface IQuestion {
  questionText: string;
  createdAt: Date;
  updatedAt: Date;
  idQuestion?: number;
  answers: IAnswer[];
}

export interface IAnswer {
  isCorrect: boolean;
  answerText: string;
  createdAt: Date;
  updatedAt: Date;
  idAnswer?: number;
}
