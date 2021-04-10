import {IQuestion} from './question';

export interface IRoom {
  name: string;
  isActive: boolean;
  isRunning: boolean;
  createdAt: Date;
  idRoom?: number;
  test?: ITest;
}

export interface ITest {
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  idTest?: number;
  category?: string;
  questions?: IQuestion[];
}
