import React from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";


function Item({ item }) {

  
    return (
        <div className="item-container">
           <img src= 'https://i.mdel.net/oftheminute/images/2019/07/Jill-06.jpg'/>
            <h3>{item.title}</h3>
            <p> {item.description}</p>
            <p> {item.price}</p>
            <p> {item.stock}</p>
            <Link className="link" to={`/Item/${item['_id']}`}>See Product</Link>  
        </div>
    )
}

export default Item;

const H3 = styled.h3`

`

const ItemContainer = styled.div`

`

const P = styled.p`

`