import React from 'react'
import { connect } from 'react-redux'
import {setFilter} from "../reducers/filterReducer";

const Filter = (props) => {

   
    const handleChange = (e) => {
       props.setFilter(e.target.value);
    }

    const style = {
        marginBottom: 10
    }

  return (
    <div style={style}>
      filter <input type="text" onChange= {handleChange} />
    </div>
  );
}

const mapDispatchToProps = () => {
  return setFilter()
};

const ConnectedAnecdotes = connect(
  mapDispatchToProps
  )(Filter);
export default ConnectedAnecdotes;