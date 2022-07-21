import React from "react";
import { connect } from "react-redux";
import { setNotification } from "../reducers/notificationReducer";
import { createAnecdote } from "../reducers/anecdoteReducer";

const AnecdoteForm = (props) => {
  // const dispatch = useDispatch();

  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    props.createAnecdote(content);
    
    props.setNotification(`Anecdote <strong>'${content}'</strong> added to list`, 5)
  ;
    /* event.target.anecdote.value = "";
    setTimeout(() => {
      dispatch(notificationTimer());
    }, 5000); */
  };

  return (
    <div>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

const mapStateToprops = (state) => {
     return {
       anecdotes: state.anecdotes,
     };
}

const mapDispatchToProps = {
  setNotification,
  createAnecdote
};

/* const mapDispatchToPropps = () => {
  return createAnecdote();
}; */


// export default AnecdoteForm;
const ConnectedAnecdotes = connect(
  mapStateToprops,
  mapDispatchToProps
  )(AnecdoteForm);
export default ConnectedAnecdotes;
