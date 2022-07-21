import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import Notification from "./components/Notification";
import Filter from "./components/Filter";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { initializeAnecdotes } from "./reducers/anecdoteReducer";

const App = () => {
  const dispatch = useDispatch();
 /*  const fetchData = async () => {
    const res = await getAll();
    try {
      dispatch(setAnecdotes(res.data));
    } catch (error) {
      throw Error(error.message);
    }
  }; */

  useEffect(() => {
    /* getAll().then((anecdotes) => dispatch(setAnecdotes(anecdotes))); */
    // fetchData();
    dispatch(initializeAnecdotes());
  }, [dispatch]);

  
  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <Notification />
      <AnecdoteList />
      <h2>create new</h2>
      <AnecdoteForm />
    </div>
  );
};

export default App;
