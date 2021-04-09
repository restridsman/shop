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
        <div className="single-item-container">
        <img src= 'https://i.mdel.net/oftheminute/images/2019/07/Jill-06.jpg' className="single-item-img"/>
         <div className="single-item-text-conatiner">
            <h3 className="single-item-title">{item.title}</h3>
            <p className="single-item-text"> {item.description}<br></br><span> - {item.stock} st left in stock</span></p>
            <div className="static-info">
                <p> ∘  Fri frakt över 299 kr</p>
                <p> ∘  Fri retur vid ny order</p>
                <p> ∘  Expressleverans inom 48h</p>
            </div>
            <p className="single-item-price"> {item.price} SEK</p>
            
          
            <p className="link-single-item">Lägg i varukorg <i class="fas fa-shopping-cart single-cart"></i></p>
        </div>
     </div>
    );
}

export default ItemPage