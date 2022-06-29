import React from 'react'
import { useDispatch } from "react-redux";
import { newAnecdote } from "./reducers/anecdoteReducer";
import {notificationTimer} from './reducers/notificationReducer' 


const AnecdoteForm = () => {
  
  const dispatch = useDispatch();
  

  const addAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    dispatch(newAnecdote(content));
    dispatch(notificationTimer(`Anecdote <strong>${content}</strong> added to list`))
  };

  return (
    <div>
      
      <form onSubmit={addAnecdote}>
        <div>
          <input name="anecdote"/>
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm