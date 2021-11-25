import React from 'react'

const ContentHeader = ({children}) => {
    return (
        <h2 className='font-body font-bold text-2xl text-center'> 
            {children}
        </h2>
    )
}

export default ContentHeader
