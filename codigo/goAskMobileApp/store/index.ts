import {configureStore} from '@reduxjs/toolkit';
import UsersReducer from './usersSlice';
import RoomReducer from './roomSlice';

const store = configureStore({
  reducer: {
    users: UsersReducer,
    room: RoomReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
