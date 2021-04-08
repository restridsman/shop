import React from 'react';
import {Link} from "react-router-dom";


function Item({ item }) {

  
    return (
        <div className="item-container">
           <Link to={`/Item/${item['_id']}`}><img src= 'https://i.mdel.net/oftheminute/images/2019/07/Jill-06.jpg'/></Link> 
            <div className="text">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p className="price"><b>{item.price} kr</b></p>
                <p>Stock: {item.stock}</p>
            </div>
        
        </div>
    )
}

export default Item;