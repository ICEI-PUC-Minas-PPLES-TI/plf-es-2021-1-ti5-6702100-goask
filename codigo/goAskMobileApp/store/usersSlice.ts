import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    userName: '',
    roomName: '',
  },
  reducers: {
    changeUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
    changeRoomName: (state, action: PayloadAction<string>) => {
      state.roomName = action.payload;
    },
  },
});

export const {changeRoomName, changeUserName} = usersSlice.actions;

export default usersSlice.reducer;
