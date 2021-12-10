import React from 'react'

const CardBodyLink = ({href, children}) => {
    return (
        <div className='flex flex-row mt-10 '>
            <a href={href}>
                <img src="link-arrow.svg" alt="" />
            </a>
            <a className='font-body font-medium text-lg mt-auto mb-auto' href={href}>{children}</a>
        </div>
    )
}

export default CardBodyLink
