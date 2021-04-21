import {Player} from '../screens/Ranking';
import {IQuestion} from '../types/question';
import {IRoom} from '../types/room';

export const mockedQuestions: IQuestion[] = [
  {
    answers: [
      {
        answerText: 'Branco',
        createdAt: new Date(2021, 4, 1).toString(),
        isCorrect: true,
        updatedAt: new Date(2021, 4, 1).toString(),
        idAnswer: 0,
      },
      {
        answerText: 'Preto',
        createdAt: new Date(2021, 4, 1).toString(),
        isCorrect: false,
        updatedAt: new Date(2021, 4, 1).toString(),
        idAnswer: 1,
      },
      {
        answerText: 'Azul',
        createdAt: new Date(2021, 4, 1).toString(),
        isCorrect: false,
        updatedAt: new Date(2021, 4, 1).toString(),
        idAnswer: 2,
      },
      {
        answerText: 'Matheus',
        createdAt: new Date(2021, 4, 1).toString(),
        isCorrect: false,
        updatedAt: new Date(2021, 4, 1).toString(),
        idAnswer: 3,
      },
    ],
    createdAt: new Date(2021, 4, 1).toString(),
    updatedAt: new Date(2021, 4, 1).toString(),
    questionText: 'Qual a cor do cavalo branco de Napoleão?',
    idQuestion: 0,
  },
  {
    answers: [
      {
        answerText: '100',
        createdAt: new Date(2021, 4, 1).toString(),
        isCorrect: false,
        updatedAt: new Date(2021, 4, 1).toString(),
        idAnswer: 4,
      },
      {
        answerText: '1000',
        createdAt: new Date(2021, 4, 1).toString(),
        isCorrect: false,
        updatedAt: new Date(2021, 4, 1).toString(),
        idAnswer: 5,
      },
      {
        answerText: 'Infinito',
        createdAt: new Date(2021, 4, 1).toString(),
        isCorrect: true,
        updatedAt: new Date(2021, 4, 1).toString(),
        idAnswer: 6,
      },
      {
        answerText: 'Todas as respostas estão corretas',
        createdAt: new Date(2021, 4, 1).toString(),
        isCorrect: false,
        updatedAt: new Date(2021, 4, 1).toString(),
        idAnswer: 7,
      },
    ],
    createdAt: new Date(2021, 4, 1).toString(),
    updatedAt: new Date(2021, 4, 1).toString(),
    questionText: 'Qual o nível da inteligência do Gabs?',
    idQuestion: 1,
  },
  {
    answers: [
      {
        answerText: 'Sim',
        createdAt: new Date(2021, 4, 1).toString(),
        isCorrect: false,
        updatedAt: new Date(2021, 4, 1).toString(),
        idAnswer: 8,
      },
      {
        answerText: 'Não',
        createdAt: new Date(2021, 4, 1).toString(),
        isCorrect: false,
        updatedAt: new Date(2021, 4, 1).toString(),
        idAnswer: 9,
      },
      {
        answerText: 'Tomates',
        createdAt: new Date(2021, 4, 1).toString(),
        isCorrect: true,
        updatedAt: new Date(2021, 4, 1).toString(),
        idAnswer: 10,
      },
      {
        answerText: 'Não há resposta',
        createdAt: new Date(2021, 4, 1).toString(),
        isCorrect: false,
        updatedAt: new Date(2021, 4, 1).toString(),
        idAnswer: 11,
      },
    ],
    createdAt: new Date(2021, 4, 1).toString(),
    updatedAt: new Date(2021, 4, 1).toString(),
    questionText: 'O que vale mais? 1kg de tomates ou 1kg de tomates?',
    idQuestion: 2,
  },
];

export const mockedRoom: IRoom = {
  createdAt: new Date(2021, 4, 1).toString(),
  isActive: true,
  isRunning: true,
  name: 'Sala do Goa',
  idRoom: 0,
};

export const mockedWinners: Player[] = [
  {
    name: 'Matheus',
    points: 300,
    placing: 1,
  },
  {name: 'Bigode', points: 0, placing: 2},
  {name: 'Leozin', points: -300, placing: 3},
  {name: 'Webin', points: -500, placing: 4},
];
