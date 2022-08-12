import { createSlice } from "@reduxjs/toolkit";

// const notificationReducer = (state = null, action) => {
//   switch (action.type) {
//     case "NEW_NOTIFICATION":
//       return action.notification;
//     case "HIDE_NOTIFICATION":
//       return action.notification;
//     default:
//       return state;
//   }
// };

// export const notificationTimer = (notification) => {
//   return (dispatch) => {
//     dispatch({
//       type: "NEW_NOTIFICATION",
//       notification,
//     });

//     setTimeout(() => {
//       dispatch({
//         type: "HIDE_NOTIFICATION",
//         notification: null,
//       });
//     }, 5000);
//   };
// };

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
    // clearTimeout(setTimeDuration);
  };
};

export const { newNotification, hideNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
