import React from 'react'
import PropTypes from 'prop-types'

function FaqFilterDesktop({filterList}) {
  return (
    <div id='filter-desktop' className='hidden lg:flex flex-col space-y-1'>
        <h3 className='font-bold'>CATEGORIES</h3>
        {filterList}
      </div>
  )
}

FaqFilterDesktop.propTypes = {}

export default FaqFilterDesktop
 