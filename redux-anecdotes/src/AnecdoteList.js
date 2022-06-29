import { useSelector, useDispatch } from "react-redux";
import { voteFor } from "./reducers/anecdoteReducer";
import { notificationTimer } from "./reducers/notificationReducer";

const AnecdoteList = () => {

  const anecdotes = useSelector((state) => state.anecdote);

  console.log(anecdotes);
  const anecdotesCopy = [...anecdotes];
  const dispatch = useDispatch();
  dispatch(notificationTimer(`YoU voted ${anecdotes.content}`));


  const vote = (id) => {
    console.log("vote", id);
    dispatch(voteFor(id));
  };


  const sortedAnecdotes = anecdotesCopy.sort((a, b) => b.votes - a.votes);
  console.log(sortedAnecdotes);


  return (
    <div>
      {sortedAnecdotes.sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AnecdoteList;
