import React from 'react'

const CardImage = ({src, alt}) => {
    return (
        <img className='sm:w-1/2 md:w-full' src={src} alt={alt} />
    )
}

export default CardImage
