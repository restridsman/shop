import React, {useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import AdminPage from '../admin/AdminPage'
import HomePage from '../admin/HomePage'






const Header = () => {
    const {pathname} = useLocation()
    
    return (
        <>
        
        <nav className= 'main-nav'>

            {/* <input className="search" type="text" placeholder="Search.."/> */}

            <h1>REMAOS</h1>
            
                <div className="links">
                    <i className="fas fa-shopping-cart" ></i>
                    {pathname === '/Admin' ?  <Link to="/"><i style={{marginRight: '6px'}} className="fas fa-user"></i></Link>  :  <Link to="/Admin"><i className="fas fa-user-shield"></i></Link> }
                   
                </div>
            
                 {/* toggle <i class="fas fa-sign-out-alt"></i> */}
        </nav>
        
        </>
        
    )
}

export default Header

