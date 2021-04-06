import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'



const Header = () => {
    
    return (
        <Container>
            <LogoContainer>
                <Logo src="/Mor_Logga.jpg"/>
            </LogoContainer>
            {/* to = href men funkar bara på ens egna domän.*/}
            <Link to="/Admin">Admin</Link>
        </Container>
    )
}

export default Header


    const Container = styled.div`
    display: flex;
    justify-content: space-between;
    `
    
    const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    `
    
    const Logo = styled.img`
    width: 150px;
    height: 150px;
    align-self: center;
    justify-self: center;
    `