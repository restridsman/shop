import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';



function ItemPage({ match }) {

    useEffect (()=>{
        fetchItem();
    }, []);

    const [item, setItem] = useState({});

    const fetchItem = async () => {
        console.log(match)
        const fetchItem = await fetch(`http://localhost:5000/products/${match.params.id}`);
        const item = await fetchItem.json();
        setItem(item);
        console.log(item);
    };


    return (
        <div className="item-container">
        <img src= 'https://i.mdel.net/oftheminute/images/2019/07/Jill-06.jpg'/>
         <h3>{item.title}</h3>
         <p> {item.description}</p>
         <p> {item.price}</p>
         <p> {item.stock}</p>
        <a className="link">Lägg i varukorg</a>
     </div>
    );
}

export default ItemPage