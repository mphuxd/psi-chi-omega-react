import React from 'react'

const ContentLink = ({src, children}) => {
    return (
        <div className='flex flex-row justify-center mt-10'>
            <a href={src}>
                <img src="link-arrow.svg" alt="Go to About Us Page" />
            </a>
            <a 
            className='font-body font-medium text-lg mt-auto mb-auto' 
            href={src}>
                {children}</a>
        </div>
    )
}

export default ContentLink
