import React from 'react'
import Item from './Item';


function Items({ items, getItem, deleteItem }) {
    return (
        <div className='items-conatiner'>
            {
                items.map( item => (
                    <Item key={item['_id']} item={item} getItem={getItem} deleteItem={deleteItem} />
                ))
            }
        </div>
    )
}

export default Items;
