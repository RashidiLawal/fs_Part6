import AnecdoteForm from "./AnecdoteForm";
import AnecdoteList from "./AnecdoteList";
import Notification from "./components/Notification";
import {initialAnecdotes} from './reducers/anecdoteReducer'
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initialAnecdotes());
  }, [dispatch])
  return (
    <div>
      <h2>create new</h2>
      <h2>Anecdotes</h2>
      <Notification />
      <AnecdoteForm />
      <AnecdoteList />
    </div>
  );
};

export default App;
