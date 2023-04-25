import React from 'react'

const Card = ({advice,handleClick}) => {
  return (
    <div className="card">
        <h1>{advice}</h1>
    <button onClick={handleClick}>
        <span>Give me advice</span>
    </button>
    </div>
  )
}

export default Card