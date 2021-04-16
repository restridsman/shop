import React, {useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import styled from 'styled-components'
import PostFormDescription from '../components/PostFormDesc';
import PostFormTitle from '../components/PostFormTitle';
import PostFormPrice from '../components/PostFormPrice';
import PostFormStock from '../components/PostFormStock';




function CreateItemPage() {
    const [item, setItem] = useState({});
    const history = useHistory(); // Initate
    console.log(history);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setItem({
            ...item,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await fetch('http://localhost:5000/products/', {
                method: 'POST', // GET, POST, PATCH, DELETE
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item)
            });
    

            history.push('/manage-items')
        } catch (error) {
            console.log(error);
        }
    }


    const [newItem, setNewItem] = useState(true)

    return (
    
        <Cont>
{newItem ?
       <Wrapper >
           
           <CreateItemContainer >
               <Item>
                       <TitleCompartment>
                           <TitleTitle class='prop__name' data-prop-name='Title'>Title
                           </TitleTitle>
                           <PostFormTitle
                                           handleSubmit={handleSubmit}
                                           handleChange={handleChange}
                                           item={item}
                                           pageId="create-item"
                           placeholder="Write Title Here..." />
                       </TitleCompartment>
                       <TitleCompartment>
                           <DescriptionTitle class='prop__name' data-prop-name='Title'>Description
                           </DescriptionTitle>
                           <PostFormDescription
                                           handleSubmit={handleSubmit}
                                           handleChange={handleChange}
                                           item={item}
                                           pageId="create-item"
                           placeholder="Write Title Here..." />
                       </TitleCompartment>
                           <PriceCompartment>
                               <PriceTitle class='prop__name' data-prop-name='Price'>Price
                               </PriceTitle>
                               <PostFormPrice
                                           handleSubmit={handleSubmit}
                                           handleChange={handleChange}
                                           item={item}
                                           pageId="create-item"
                           placeholder="Write Title Here..." />



                           </PriceCompartment>
                           <PriceCompartment>
                               <StockTitle class='prop__name' data-prop-name='Stock'>Stock
                               </StockTitle>
                               <PostFormStock
                                           handleSubmit={handleSubmit}
                                           handleChange={handleChange}
                                           item={item}
                                           pageId="create-item"
                           placeholder="Write Title Here..." />



                           </PriceCompartment>
                           <CategoryCompartment>
                               <CategoryTitle class='prop__name' data-prop-name='Category'>Category
                               </CategoryTitle>
                               <CategorySelect >
                                   <option value="Hoodies">Hoodies</option>
                                   <option value="Socks">Socks</option>
                                   <option value="Pants">Pants</option>
                               </CategorySelect>
                           </CategoryCompartment>
                           <br />
                     <StockCompartment>
                     <Link onClick={() => setNewItem(prevState => !prevState)}>&larr; Back</Link>
                     <a href="">Create &rarr;</a>
                     </StockCompartment>
               </Item>
               
           </CreateItemContainer>
           
       </Wrapper>
       : null}
</Cont>
       )
}

export default CreateItemPage

const Cont = styled.div``

const Wrapper = styled.div`
`

 // Create button
// {pageId === "update-page" ? "Update" : "Create" }

const CreateItemContainer = styled.div`
position: absolute;
top: 50%;
left: 50%;
z-index: 2;
transform: translate(-50%, -50%);
background-color: transparent;
padding: 0.5rem 1rem;
border-radius: 0.5rem;
display: flex;
justify-content: center;
align-items: center;
`

const Item = styled.div`
background-color: darkgray;
height: auto;
width: 400px;
padding: 20px;
min-height: 620px;
display: flex;
justify-content: center;
align-items: center;
flex-flow: column;
animation: animate 12s linear infinite;

@keyframes animate {
    10%{
        box-shadow: 0 0 0 0 #fbfcfd;
    }
    45%{
        box-shadow: 0 0 0 0 #fbfcfd, 0 0 4px 0 #fbfcfd;
    }
    75%{
        box-shadow: 0 0 0 0 #fbfcfd, 0 0 22px 0 #fbfcfd;
    }
    100%{
        box-shadow: 0 0 0 #fbfcfd;
    }
}
`

const TitleCompartment = styled.div`
`

const TitleTitle = styled.h3`
align-items: top;
display: flex;
justify-self: flex-start;
`
const DescriptionCompartment = styled.div`
height: 100px;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`

const DescriptionTitle = styled.h3`

`
const InfoRow = styled.div`
height: 100px;
display: flex;
align-items: center;
justify-content: space-between;
`

const PriceCompartment = styled.div`

`

const PriceTitle = styled.h3` 
`

const StockCompartment = styled.div`
    display: flex;
    justify-content: space-between;
    width: 220px;
`

const StockTitle = styled.h3` 

`

const CategoryCompartment = styled.div`

`

const CategoryTitle = styled.h3` 

`
const CategorySelect = styled.select`
width: 100px;
height: 50px;
`

const ImageCompartment = styled.div`
width: 500px;
height: 100px;
display: flex;
justify-content: space-between;
align-items: center;
`

const ImageTitle = styled.h3` 

`
