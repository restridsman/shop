import React from 'react'

function ItemPage({ match }) {
    console.log(match)
    return (
        <div>
            <h1>Single Item</h1>
            <p>hej</p>
        </div>
    )
}

export default ItemPage



// import React from 'react'
// // import styled from 'styled-components'
// // import Item from '../components/Item'


// function ItemPage({item, getItem}) {

//     return (
//         <div>
//             <h1>Singel Item</h1>
//             {/* {item ?
//             <SelectedItem>
//                 <Item key={item['_id']} item={item} getItem={getItem} />

                

//             </SelectedItem>

// : console.log('finns inte')} */}
            
//         </div>
//     )
// }

// export default ItemPage

// // const SelectedItem = styled.div`
// // justify-content: center;
// // align-items: center;

// // `

