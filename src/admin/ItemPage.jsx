import React from 'react'
import styled from 'styled-components'
import Item from '../components/Item'


function ItemPage({item, getItem}) {

    return (
        <div>
            {item ?
            <SelectedItem>
                <Item key={item['_id']} item={item} getItem={getItem} />

                

            </SelectedItem>

: console.log('finns inte')}
            
        </div>
    )
}

export default ItemPage

const SelectedItem = styled.div`
justify-content: center;
align-items: center;

`

