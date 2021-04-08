import {createSlice} from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    userName: '',
    roomName: '',
  },
  reducers: {
    changeUserName: (state, action) => {
      state.userName = action.payload.userName;
    },
    changeRoomName: (state, action) => {
      state.roomName = action.payload.roomName;
    },
  },
});

export const {changeRoomName, changeUserName} = usersSlice.actions;

export default usersSlice.reducer;
