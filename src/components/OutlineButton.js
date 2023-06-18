import React from 'react'
import { Link } from 'react-router-dom'

const OutlineButton = (props) => {
  return (
    <Link to="/register">
      <button className="outline-button">
        {props.label} {props.icon}
      </button>
    </Link>
  );
}

export default OutlineButton