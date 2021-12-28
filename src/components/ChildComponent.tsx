import React from 'react'

type ChildComponentProps = {
    children: React.ReactNode
}


const ChildComponent = (props:ChildComponentProps) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default ChildComponent
