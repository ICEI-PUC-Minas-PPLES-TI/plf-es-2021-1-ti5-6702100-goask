import {IQuestion} from './question';

export interface IRoom {
  name: string;
  isActive: boolean;
  isRunning: boolean;
  createdAt: string;
  idRoom?: number;
  test?: ITest;
}

export interface ITest {
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  idTest?: number;
  category?: string;
  questions?: IQuestion[];
}
