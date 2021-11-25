import { imageConfigDefault } from 'next/dist/server/image-config'
import React from 'react'

const HeroImage = ({src}) => {
    return (
       <img className='mt-7' src={src} alt="" />
    )
}

export default HeroImage
