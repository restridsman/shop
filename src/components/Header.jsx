import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'



const Header = () => {
    
    return (
        <nav className= 'main-nav'>
            <Link to="/Admin">Admin</Link>
        </nav>
            
        
    )
}

export default Header


    // const Container = styled.div`
    // height: 300 px;
    // display: flex;
    // justify-content: space-between;
    // background-color: lightgrey;
    // `
    
    // const LogoContainer = styled.div`
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // `
    
    // const Logo = styled.img`
    // width: 150px;
    // height: 150px;
    // align-self: center;
    // justify-self: center;
    // `