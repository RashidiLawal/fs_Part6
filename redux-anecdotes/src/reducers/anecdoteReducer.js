// import { createSlice } from "@reduxjs/toolkit"
import { createStore, combineReducers } from "redux"
import notificationReducer from "./notificationReducer"



const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)


/* const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState,
  reducers: {
    initialAnecdotes(state, action) {
      const content = action.payload
      return [...state, content]
      
    },
    voteFor(state, action) {
      const id = action.payload;
      const updatedAnecdote = state.find((anecdote) => anecdote.id === id);
      const newAnecdote = {
        ...updatedAnecdote,
        votes: updatedAnecdote.votes + 1,
      };
      return state.map((anecdote) =>
        anecdote.id !== id ? anecdote : newAnecdote
      );
    },
    newAnecdote(state, action) {
      const content = action.payload;
      state.push({
        content,
        id: getId(),
        votes: 0,
      });
    },
  },
});
 */


const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type) {
    case 'INIT_ANECDOTES':
      return action.data
    case 'NEW_ANECDOTES':
      return state.concat(action.data)
    case 'VOTE': {
      const id = action.data.id
      const updatedAnecdote = state.find(anecdote => anecdote.id === id)
      const newAnecdote = {
        ...updatedAnecdote, votes: updatedAnecdote.votes + 1
      }
      return state.map((anecdote) =>
        anecdote.id !== id ? anecdote : newAnecdote
      );

    }
    default:
       return state;
  }
}


const conReducer = combineReducers({
  anecdotes: reducer,
  notifications: notificationReducer,
});

const store = createStore(conReducer);

export const initialAnecdotes = (anecdotes) => {
  return store.dispatch({ type: "INIT_ANECDOTES",
data: {anecdotes} });
}


 export const voteFor = (id) => {
   return {
     type: "VOTE",
     data: {
       id
     }
   };
 };



export const newAnecdote = (event) => {
  event.preventDefault()
  const content = event.target.anecdote.value
  event.target.anecdote.value = ''
  return {
    type: "NEW_ANECDOTES",
    data: {
      content,
      id: getId(),
      votes: 0,
    },
  };
} 



/* export const {voteFor, newAnecdote} = anecdoteSlice.actions
export default anecdoteSlice.reducer */
export default reducer 