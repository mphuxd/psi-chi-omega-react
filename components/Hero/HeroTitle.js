import React from 'react'

const HeroTitle = ({children}) => {
    let classNames = 'text-4xl font-normal w-auto text-center font-display max:text-7xl'
    return (
        <h1 className={classNames}>{children}</h1>
    )
}

export default HeroTitle
