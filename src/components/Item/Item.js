import React from 'react'

const Item = ({nombre, precio, url,descripcion}) => {
  return (
    <div>
        <h2 className='name'>{nombre} </h2>
        <img className='image' src={url} alt={nombre} />
        <h3 className='descripcion'>{descripcion} </h3>
        <h3 className='precio'>${precio} </h3>
    </div>
  )
}

export default Item