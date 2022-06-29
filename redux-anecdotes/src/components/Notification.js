import React from "react"
import { useSelector } from "react-redux"

const Notification = () => {
  const notification = useSelector((state) => state.notification);

  const style = {
    border: '1rem solid blue' ,
    padding: 10,
    borderWidth: 2
  }

  if (notification === null) {
    return null
  }

  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification