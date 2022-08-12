import React from "react";
import { connect } from "react-redux";

const Notification = (props) => {

  if (props.notifications === null || !props.notifications.length) {
    return null;
  }

  const style = {
    border: "1rem solid blue",
    padding: 10,
    borderWidth: 2,
  };

  return <div style={style}>{props.notifications}</div>;
};

const mapStateToprops = (state) => {
  return {
    notifications: state.notifications,
  };
};

const ConnectedAnecdotes = connect(mapStateToprops)(Notification);
export default ConnectedAnecdotes;

