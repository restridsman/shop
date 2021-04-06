import React from 'react'

function Item(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <p> {props.description}</p>
            <p> {props.price}</p>
            <p> {props.stock}</p>    
        </div>   
    )
}

export default Item
