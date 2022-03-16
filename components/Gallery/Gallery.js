import React from 'react'
import PropTypes from 'prop-types'

function Gallery({children}) {
  return (
    <div className='col-span-full theme--grid_inner lg:grid-rows-[9] gap-y-4 lg:gap-8'>
    {children}
  </div>
  )
}

Gallery.propTypes = {}

export default Gallery
