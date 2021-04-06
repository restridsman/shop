import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import CreateItem from '../components/CreateItem'

const AdminPage = () => {

    const [item, setItem] = useState(false)

    return (
        <Wrapper>
            <Header>
                <Logo>Admin</Logo>
                <Link to="./">Home</Link>
            </Header>



            <Content>
                <CreateItemButton onClick={() => setItem(prevState => !prevState)}
                >
                    Create Item
                </CreateItemButton>
            </Content>
            {item ? (
                <CreateItem />
            )
        : undefined}

        </Wrapper>
        
        
        
    )
}

export default AdminPage

const Wrapper = styled.div`
height: 100vh;
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

