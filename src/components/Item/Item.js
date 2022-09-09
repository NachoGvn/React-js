import React from 'react'

const Item = ({nombre, precio, url}) => {
  return (
    <div>
        <img src={url} alt={nombre} />
        <h2>{nombre} </h2>
        <h3>{precio} </h3>
    </div>
  )
}

export default Item