import React from 'react'
import styled from 'styled-components'

function Item(props) {
    return (
        <ItemContainer>
            <H3>{props.title}</H3>
            <P> {props.description}</P>
            <P> {props.price}</P>
            <P> {props.stock}</P>    
        </ItemContainer>   
    )
}

export default Item

const H3 = styled.h3`

`

const ItemContainer = styled.div`

`

const P = styled.p`

`
