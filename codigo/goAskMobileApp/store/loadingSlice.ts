import {createSlice, SliceCaseReducers} from '@reduxjs/toolkit';
import {LOADING_MESSAGES} from '../screens/Loading';

export type LoadingStage =
  | 'fecthingQuestions'
  | 'connectingToWebSocket'
  | 'waitingForQuizToStart';

interface LoadingState {
  loadingText: string;
  loadingStage: LoadingStage;
}

export const loadingSlice = createSlice<
  LoadingState,
  SliceCaseReducers<LoadingState>
>({
  name: 'loading',
  initialState: {
    loadingText: LOADING_MESSAGES.FETCHING_ROOM,
    loadingStage: 'fecthingQuestions',
  },
  reducers: {
    setConnectingToWebSocketStage: (state) => {
      state.loadingText = LOADING_MESSAGES.CONNECTING_WEB_SOCKET;
      state.loadingStage = 'connectingToWebSocket';
    },
    setWaitingForQuizToStartStage: (state) => {
      state.loadingText = LOADING_MESSAGES.WAITING_QUIZ;
      state.loadingStage = 'waitingForQuizToStart';
    },
    clear: (state) => {
      state.loadingText = LOADING_MESSAGES.FETCHING_ROOM;
      state.loadingStage = 'fecthingQuestions';
    },
  },
});

export const {
  setConnectingToWebSocketStage,
  setWaitingForQuizToStartStage,
  clear,
} = loadingSlice.actions;

export default loadingSlice.reducer;
