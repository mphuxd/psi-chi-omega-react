import React from 'react'

const Hero = ({children}) => {
    return (
        <div className={"flex flex-col justify-center w-screen mt-9"}>
            {children}
        </div>
    )
}

export default Hero
