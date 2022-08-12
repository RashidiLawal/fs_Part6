import { useSelector, useDispatch } from "react-redux";
import { setNotification } from "../reducers/notificationReducer";
import { vote } from "../reducers/anecdoteReducer";

const Anecdote = ({ anecdote }) => {
  const dispatch = useDispatch();
  const voteForHandler = () => {
    dispatch(vote(anecdote));
    dispatch(setNotification(`You voted for '${anecdote.content}'`, 2));
  };

  return (
    <div>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={voteForHandler}>vote</button>
      </div>
    </div>
  );
};

const AnecdoteList = () => {
  const anecdotes = useSelector((state) =>
    state.anecdotes.filter(({ content }) =>
      content.toLowerCase().includes(state.filter.toLowerCase())
    )
  );

  const anecdotesCopy = [...anecdotes];

  return (
    <div>
      {anecdotesCopy
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <Anecdote key={anecdote.id} anecdote={anecdote} />
        ))}
    </div>
  );
};

export default AnecdoteList;
