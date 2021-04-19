import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import CreateItemForm from '../components/CreateItemForm'
import Item from '../components/Item'
import Items from '../components/Items'
import axios from 'axios'
// import {Link} from 'react-router-dom'
// import Items from '../components/Items';
// import ProductAPI from '../components/ProductAPI'





const AdminPage = () => {


    const [item, setItem] = useState([]);
    const [newItem, setNewItem] = useState(false)
    const [itemChange, setItemChange] = useState(false)
    const fetchProducts = () => {
        axios
        .get('http://localhost:5000/products/')
        .then(res => setItem(res.data))
        .catch(err => console.log(err))
  
    }  

    useEffect (()=>{
            fetchProducts();
    }, [itemChange])

   const handleDelete = (id) => {
       
        axios
        .delete(`http://localhost:5000/products/${id}`)
        .then(res => setItemChange(prevState => !prevState))
        .catch(err => console.log(err))
        
   }
    


    return (

        
        <Content>
             <CreateItemButton onClick={() => setNewItem(true)}
             >
                 Create Item       
             </CreateItemButton>
           
             {newItem ? 
             <CreateItemForm addItem={setItemChange} close={setNewItem}/>
             : null
             }
                  {/* När knappen trycks ska form dyka upp mellan knappen och table */}

                 
                <table>
                    <thead>
                        

                    </thead>
                    <tbody>
                    <tr>
                   
                    <th>Product</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Stock</th>
                    </tr>    
                    
                            
                            {item.map( (Items, idx) => (
                             

                                <tr key={idx}>
                                    <td>
                                    {Items.title}
                                    </td>
                                    <td>
                                    {Items.description}
                                    </td>
                                    <td>
                                    {Items.price}
                                    </td>
                                    <td>
                                    {Items.stock}
                                    </td>
                                    <Delete onClick={() => handleDelete(Items._id)} >
                                        Delete
                                    </Delete>

                                

                                </tr>

                        
                            ))}
                       
                    
                  
                   
                    
                    
                    </tbody>
   
                </table>
             
             <>
          
        </>


                    
        </Content>
                )
        }

export default AdminPage



const Content = styled.div`
height: 100%;
border: 1px black solid;
background-color: #c0b0b0
`
const Delete = styled.td`
        background: red;
        cursor: pointer;
`

const CreateItemButton = styled.button`
margin: 8px 0 8px 45px;
    font-weight: 100;
    color: black;
    font-size: 1rem;
    width: 120px;
    display: flex;
    justify-content: center;
    border-radius: 2rem;
    background: #0c0c0c;
    outline: none;
    color: white;
    cursor: pointer;
    padding: 1rem 0.5rem;
    animation: animate 2s linear infinite;

@keyframes animate {
    10%{
        box-shadow: 0 0 0 0 #fbfcfd;
    }
    45%{
        box-shadow: 0 0 0 0 #fbfcfd, 0 0 4px 0 #fbfcfd;
    }
    75%{
        box-shadow: 0 0 0 0 #fbfcfd, 0 0 8px 0 #fbfcfd;
    }
    100%{
        box-shadow: 0 0 0 #fbfcfd;
    }
}
`
const Table = styled.table`
width: 50px;

`