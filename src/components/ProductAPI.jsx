import React, {useState, useEffect} from 'react'
import Items from './Items';

function ProductAPI() {
    const [items, setItems] = useState([]);

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
            setItems(data);
            console.log(data);
        }catch(error){
            console.log(error);
        }
    }  

    return (
        <div>
            <Items items={items} />
            {/* <h1>Manage blabla</h1>
            {
                item.map( item => (
                    <article key ={item['_id']}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <p>{item.price}</p>
                        <p>{item.stock}</p>
                    </article>
                ))
            } */}
           
        </div>
    )
}

export default ProductAPI