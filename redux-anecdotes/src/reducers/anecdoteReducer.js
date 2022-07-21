import { createSlice } from "@reduxjs/toolkit";
import { getAll, newCreateAnec, update } from "../services/anecdotes";

const anecdotesAtStart = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

const initialState = anecdotesAtStart.map(asObject);

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState,
  reducers: {
    setAnecdotes(state, action) {
      return action.payload;
    },
    voteFor(state, action) {
      const id = action.payload.id;
      console.log({ id });
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
      state.push(action.payload);
    },
  },
});


export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await getAll()
    dispatch(setAnecdotes(anecdotes));
  }
}


export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdot = await newCreateAnec(content)
    dispatch(newAnecdote(newAnecdot));
  }
}


export const vote = anecdote => {
  return async dispatch => {
    const updatedAnecdote = await update({...anecdote, votes: anecdote.votes + 1})
    dispatch(voteFor(updatedAnecdote));
  }
}

/* const reducer = (state = initialState, action) => {
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
} */

/* export const initialAnecdotes = (anecdotes) => {
  return store.dispatch({ type: "INIT_ANECDOTES",
data: {anecdotes} });
} */

/* export const voteFor = (id) => {
   return {
     type: "VOTE",
     data: {
       id
     }
   };
 };
 */

/* 
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
 */

export const { setAnecdotes, voteFor, newAnecdote } = anecdoteSlice.actions;



export default anecdoteSlice.reducer;
