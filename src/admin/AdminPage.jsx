import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import CreateItem from '../components/CreateItem'
import ProductAPI from '../components/ProductAPI'

const AdminPage = () => {

    const [item, setItem] = useState(false)

    return (
        <Wrapper>
           
            <Header>
                <Logo>Admin</Logo>
                <Link to="/">Home</Link>
            </Header>
           



            <Content >
                <CreateItemButton onClick={() => setItem(prevState => (!prevState))}>
                    Create Item
                
                
                </CreateItemButton>
                
                {item ? (
                    <>
                    <ReturnToAdminPage onClick={() => setItem(false)} />
                    <CreateItem />
                    </>
                    )
                    : null}

                <ProductAPI />
            </Content>
           
         
        </Wrapper>
        
        
        
    )
}

export default AdminPage

const Wrapper = styled.div`
height: 100vh;
position: relative;
`
const Header = styled.div`
justify-content: space-between;
display: flex;
align-items: center;
padding: 0 8px;
height: 100px;
background-color: #72b0da;
color: white;
`

const Logo = styled.h1`
justify-self: center;
align-self: center;
margin-left: 50px;
`

const Content = styled.div`
height: 100%;
border: 1px black solid;
background-color: #141414


`

const ReturnToAdminPage = styled.div`
position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
z-index: 0`

const CreateItemButton = styled.button`
margin: 8px 0 8px 45px;
    font-weight: 100;
    color: black;
    font-size: 1rem;
    width: 120px;
    display: flex;
    justify-content: center;
    border-radius: 2rem;
    background: black;
    outline: none;
    color: purple;
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

