import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import CreateItem from '../components/CreateItem'
import Item from '../components/Item'
import Items from '../components/Items'
// import {Link} from 'react-router-dom'
// import Items from '../components/Items';
// import ProductAPI from '../components/ProductAPI'





const AdminPage = () => {


    const [item, setItem] = useState([]);

    useEffect (()=>{
        fetchProducts(); //fetchPuns{};
    }, [])

    const fetchProducts = async () => {
        try{
            const response = await fetch ('http://localhost:5000/products/');
            if (!response.ok) {
                throw new Error('HTTP Error! status: ' + response.status);
             }
            const data = await response.json();
            setItem(data);
            console.log(data);
        }catch(error){
            console.log(error);
        }
    }  

    

    const [newItem, setNewItem] = useState(false)
    
    


    return (

        
        <Content>
             <CreateItemButton onClick={() => setNewItem(prevState => !prevState)}
             >
                 Create Item
             </CreateItemButton>
                 {newItem ? (
             <CreateItem />

             )
             : undefined}



                <table>
                    <thead>
                        

                    </thead>
                    <tbody>
                    <tr>
                            <tr>

                         
                                <th>Product</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Stock</th>
                    
                            </tr>
                            
                            {item.map( Items => (
                                <>

                                <tr>
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
                                    
                                

                                </tr>

                                </>
                            ))}
                       
                    
                    </tr>
                   
                    
                    
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