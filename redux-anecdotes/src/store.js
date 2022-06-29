import {configureStore} from '@reduxjs/toolkit'
/* import reducer from "./reducers/anecdoteReducer";
import notificationReducer from './reducers/notificationReducer' */
import conReducer from './reducers/anecdoteReducer'

export const store = configureStore({
  reducer: {
    reducer: conReducer,
  },
});