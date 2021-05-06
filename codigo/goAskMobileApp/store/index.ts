import {configureStore} from '@reduxjs/toolkit';
import UsersReducer from './usersSlice';
import RoomReducer from './roomSlice';
import WebSocketReducer from './webSocketSlice';
import LoadingReducer from './loadingSlice';

const store = configureStore({
  reducer: {
    users: UsersReducer,
    room: RoomReducer,
    webSocket: WebSocketReducer,
    loading: LoadingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
