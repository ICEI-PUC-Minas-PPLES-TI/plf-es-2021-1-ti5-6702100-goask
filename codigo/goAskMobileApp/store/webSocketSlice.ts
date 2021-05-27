import {createSlice, PayloadAction, SliceCaseReducers} from '@reduxjs/toolkit';

interface WebSocketState {
  error: string | null;
  isCreated: boolean;
  isOpened: boolean;
  connectionsRetry: number;
  results: [{name: string; right_answers: string}] | null;
  hasStarted: boolean;
}

export const webSocketSlice = createSlice<
  WebSocketState,
  SliceCaseReducers<WebSocketState>
>({
  name: 'webSocket',
  initialState: {
    error: null,
    isCreated: false,
    isOpened: false,
    connectionsRetry: 0,
    results: null,
    hasStarted: false,
  },
  reducers: {
    create: (state) => {
      state.isCreated = true;
    },
    open: (state) => {
      state.isOpened = true;
    },
    clearConnection: (state) => {
      state.isCreated = false;
      state.isOpened = false;
      state.connectionsRetry = 0;
      state.hasStarted = false;
    },
    addConnectionRetry: (state) => {
      state.connectionsRetry += 1;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    setResults: (
      state,
      action: PayloadAction<[{name: string; right_answers: string}]>,
    ) => {
      state.results = action.payload;
    },
    clearResults: (state) => {
      state.results = null;
    },
    startQuiz: (state) => {
      state.hasStarted = true;
    },
  },
});

export const {
  create,
  open,
  setError,
  clearError,
  setResults,
  clearResults,
  startQuiz,
  clearConnection,
  addConnectionRetry,
} = webSocketSlice.actions;

export default webSocketSlice.reducer;
