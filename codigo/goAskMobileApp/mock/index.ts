import {IQuestion} from '../types/question';
import {IRoom} from '../types/room';

export const mockedQuestions: IQuestion[] = [
  {
    answers: [
      {
        answerText: 'Branco',
        createdAt: new Date(2021, 4, 1),
        isCorrect: true,
        updatedAt: new Date(2021, 4, 1),
        idAnswer: 0,
      },
      {
        answerText: 'Preto',
        createdAt: new Date(2021, 4, 1),
        isCorrect: false,
        updatedAt: new Date(2021, 4, 1),
        idAnswer: 1,
      },
      {
        answerText: 'Azul',
        createdAt: new Date(2021, 4, 1),
        isCorrect: false,
        updatedAt: new Date(2021, 4, 1),
        idAnswer: 2,
      },
      {
        answerText: 'Matheus',
        createdAt: new Date(2021, 4, 1),
        isCorrect: false,
        updatedAt: new Date(2021, 4, 1),
        idAnswer: 3,
      },
    ],
    createdAt: new Date(2021, 4, 1),
    updatedAt: new Date(2021, 4, 1),
    questionText: 'Qual a cor do cavalo branco de Napoleão?',
    idQuestion: 0,
  },
  {
    answers: [
      {
        answerText: '100',
        createdAt: new Date(2021, 4, 1),
        isCorrect: false,
        updatedAt: new Date(2021, 4, 1),
        idAnswer: 4,
      },
      {
        answerText: '1000',
        createdAt: new Date(2021, 4, 1),
        isCorrect: false,
        updatedAt: new Date(2021, 4, 1),
        idAnswer: 5,
      },
      {
        answerText: 'Infinito',
        createdAt: new Date(2021, 4, 1),
        isCorrect: true,
        updatedAt: new Date(2021, 4, 1),
        idAnswer: 6,
      },
      {
        answerText: 'Todas as respostas estão corretas',
        createdAt: new Date(2021, 4, 1),
        isCorrect: false,
        updatedAt: new Date(2021, 4, 1),
        idAnswer: 7,
      },
    ],
    createdAt: new Date(2021, 4, 1),
    updatedAt: new Date(2021, 4, 1),
    questionText: 'Qual o nível da inteligência do Gabs?',
    idQuestion: 1,
  },
  {
    answers: [
      {
        answerText: 'Sim',
        createdAt: new Date(2021, 4, 1),
        isCorrect: false,
        updatedAt: new Date(2021, 4, 1),
        idAnswer: 8,
      },
      {
        answerText: 'Não',
        createdAt: new Date(2021, 4, 1),
        isCorrect: false,
        updatedAt: new Date(2021, 4, 1),
        idAnswer: 9,
      },
      {
        answerText: 'Tomates',
        createdAt: new Date(2021, 4, 1),
        isCorrect: true,
        updatedAt: new Date(2021, 4, 1),
        idAnswer: 10,
      },
      {
        answerText: 'Não há resposta',
        createdAt: new Date(2021, 4, 1),
        isCorrect: false,
        updatedAt: new Date(2021, 4, 1),
        idAnswer: 11,
      },
    ],
    createdAt: new Date(2021, 4, 1),
    updatedAt: new Date(2021, 4, 1),
    questionText: 'O que vale mais? 1kg de tomates ou 1kg de tomates?',
    idQuestion: 2,
  },
];

export const mockedRoom: IRoom = {
  createdAt: new Date(2021, 4, 1),
  isActive: true,
  isRunning: true,
  name: 'Sala do Goa',
  idRoom: 0,
};
