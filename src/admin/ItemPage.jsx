import React, {useState, useEffect} from 'react'



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
        <div>
            <h1>Item</h1>
            <p>{item.title}</p>
        </div>
    );
}

export default ItemPage