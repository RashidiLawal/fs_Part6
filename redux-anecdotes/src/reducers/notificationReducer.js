import { createSlice } from "@reduxjs/toolkit";
const initialState = null;


const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    newNotification(state, action) {
      return action.payload;
    },
  },
});

export const setNotification = (notification, timer) => {
  return async (dispatch) => {
    console.log({ notification, timer });
    dispatch(newNotification(notification));
    setTimeout(() => {
      dispatch(newNotification(null));
    }, timer * 1000);
    
  };
};

export const { newNotification, hideNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
