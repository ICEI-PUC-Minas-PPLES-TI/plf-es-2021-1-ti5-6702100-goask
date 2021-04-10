import {createSlice, PayloadAction, SliceCaseReducers} from '@reduxjs/toolkit';
import {IQuestion} from '../types/question';
import {IRoom} from '../types/room';

interface RoomState {
  room?: IRoom;
  questions?: IQuestion[];
  numberOfQuestions?: number;
  isLoading: boolean;
  numberOfQuestionsAnswered: number;
}

export const roomSlice = createSlice<RoomState, SliceCaseReducers<RoomState>>({
  name: 'room',
  initialState: {
    room: undefined,
    numberOfQuestions: undefined,
    isLoading: false,
    questions: undefined,
    numberOfQuestionsAnswered: 0,
  },
  reducers: {
    changeRoom: (state, action: PayloadAction<IRoom>) => {
      state.room = action.payload;
    },
    changeQuestions: (state, action: PayloadAction<IQuestion[]>) => {
      state.questions = action.payload;
      state.numberOfQuestions = action.payload.length;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    increaseNumberOfQuestionsAnswered: (state) => {
      state.numberOfQuestionsAnswered += 1;
    },
  },
});

export const {
  changeRoom,
  changeQuestions,
  setLoading,
  increaseNumberOfQuestionsAnswered,
} = roomSlice.actions;

export default roomSlice.reducer;
