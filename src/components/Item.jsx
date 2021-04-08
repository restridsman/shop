// import React from 'react'
// import styled from 'styled-components'
// import { Link } from 'react-router-dom'

// function Item(props) {
//     return (
//         <ItemContainer>
//             <H3>{props.title}</H3>
//             <P> {props.description}</P>
//             <P> {props.price}</P>
//             <P> {props.stock}</P>
//             {/* <Link to="/Item">Läs mer</Link>     */}
//             <Link to={`/Item/${props['_id']}`}><button>Läs mer</button></Link>
//             {/* function PunList({ puns, deletePun }) {
//     return (
//         <div>
//             { HALLLÅ!!!!
//                 puns.map( pun => (
//                     <Pun key={pun['_id']} pun={pun} deletePun={deletePun} />
//                 ))
//             }
//         </div>
//     )
// } */}
//         </ItemContainer>   
//     )
// } 
// //<a href="post.html?id=${post['_id']}" class="read-more-link">...read more</a>
// export default Item

// const H3 = styled.h3`

// `

// const ItemContainer = styled.div`

// `

// const P = styled.p`

// `

import React from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";


function Item({ item,  }) {



    // const handleGetBtn = () => {
    //     getItem(item['_id']);
    // }

    return (
        <ItemContainer>
            <H3>{item.title}</H3>
            <P> {item.description}</P>
            <P> {item.price}</P>
            <P> {item.stock}</P>
            
            {/* 
                Make sure to send the punId in the URL, in combination with setting the <Route path="/update-pun/:id"> in App.js 
                This will ensure that UpdatePun.js gets hold of the punId, through the variable "match"
            */}
            {/* <Link to={`/update-pun/${pun['_id']}`}><button>Update</button></Link> */}
            <Link to={`/Item/${item['_id']}`}><button>See Product</button></Link>
            {/* <button onClick={handleGetBtn}>Delete</button> */}
        </ItemContainer>
    )
}

export default Item;

const H3 = styled.h3`

`

const ItemContainer = styled.div`

`

const P = styled.p`

`