import { createSlice } from "@reduxjs/toolkit"


 const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case "NEW_NOTIFICATION":
      return action.notification;
    case "HIDE_NOTIFICATION":
      return action.notification;
    default:
      return state;
  }
};

export const notificationTimer = (notification) => {
  return (dispatch) => {
    dispatch({
      type: "NEW_NOTIFICATION",
      notification,
    });

    setTimeout(() => {
      dispatch({
        type: "HIDE_NOTIFICATION",
        notification: null,
      });
    }, 5000);
  };
};

const initialState = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
     newNotification(state, action) {
         return [...state, action.payload]
     },
     hideNotification(state, action) {
       
        const notification = action.payload

        const notificationTimer = (notification) => {
          return (dispatch) => {
            dispatch({
              type: "NEW_NOTIFICATION",
              notification,
            });

            setTimeout(() => {
              dispatch({
                type: "HIDE_NOTIFICATION",
                notification: null,
              });
            }, 5000);
          };
        };}
  }

})

export const { newNotification } = notificatioSlice.actions;
export default notificationSlice.reducer
// export default notificationReducer;
