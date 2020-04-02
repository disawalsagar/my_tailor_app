import React from 'react'

function ImageBndl (props) {
    console.log (props)

    return (
    <div>   
    <img src={props.url} className="Home-logo" alt="logo" />
    <h4>{props.url}</h4>
    </div>
    )
        
    }

export default ImageBndl