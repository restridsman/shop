import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'


export default function CreateItemForm({addItem, close}) {

    const url = ""
    const [data, setData] = useState({
        title: "",
        desctription: "",
        price: "",
        stock: ""
    })
    const submit = (event) => {
        axios
		.post('http://localhost:5000/products', data)
		.then(res => {
			addItem(prevState => !prevState)
            close(false)
		})
		.catch(error => console.log(error))
        event.preventDefault()
        
    }
    function handle(e){
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
    
        // setData(prevState => ({...prevState, [e.target.id]: e.target.value}))
    }
    return (
        <Wrapper>
            <ItemForm onSubmit={(e) => submit(e)}>
                <h3>Title</h3>
                <input onChange={(e)=>handle(e)} id="title" value={data.title} type="text" placeholder="Name of product"></input>
                <h3>Description</h3>
                <input onChange={(e)=>handle(e)} id="description" value={data.description} type="text" placeholder="Description of product"></input>
                <h3>Price</h3>
                <input onChange={(e)=>handle(e)} id="price" value={data.price} type="text" placeholder="Price of product"></input>
                <h3>Stock</h3>
                <input onChange={(e)=>handle(e)} id="stock" value={data.stock} type="text" placeholder="Product in stock"></input>
                <input type="submit" value="Submit"></input>
            </ItemForm>

            
        </Wrapper>
    )
}

const Wrapper = styled.div`
border: solid black 1px;

`

const ItemForm = styled.form`

`


