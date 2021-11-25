import React from 'react'

const HeroSubtitle = ({children}) => {
    let classNames = 'text-3xl w-auto text-center font-display'
    return (
        <h1 className={classNames}>{children}</h1>
    )
}

export default HeroSubtitle
