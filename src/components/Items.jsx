import React from 'react'
import Item from './Item';


// const Items = (props) => {
//     return (
//         <>
//             {props.items.map((item) => (
//             <Item key={item['_id']} title={item.title} description={item.description} price={item.price} stock={item.stock}/>
//             ))}
//         </>
//     )
// }

// export default Items;

function Items({ items, getItem }) {
    return (
        <div>
            {
                items.map( item => (
                    <Item key={item['_id']} item={item} getItem={getItem} />
                ))
            }
        </div>
    )
}

export default Items;
