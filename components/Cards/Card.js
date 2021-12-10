import React from 'react'

const Card = ({className, children}) => {
    let classNames = 'flex flex-col ' + className;
    return (
        <div className={classNames}>  
            {children}
        </div>
    )
}

export default Card
