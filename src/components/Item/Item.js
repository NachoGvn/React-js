import React from 'react'

const Item = ({title, price, image,description}) => {
  return (
    <div className='borde'>
        <h2 className='name'>{title} </h2>
        <img className='image' src={image} alt={title} />
        <h3 className='descripcion'>{description} </h3>
        <h3 className='precio'>${price} </h3>
    </div>
  )
}

export default Item