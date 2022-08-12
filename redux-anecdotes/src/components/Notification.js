import React from "react";
import { connect } from "react-redux";
// import { useSelector } from "react-redux";

const Notification = (props) => {
  // const notification = useSelector((state) => state.notifications);

  // console.log({ notification });
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
// export default Notification;

/* const Notification = (props) => {
  // const notification = useSelector((state) => state.notifications);

  // console.log({ notification });
  if (props.notifications === null) {
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
// export default Notification;
 */
