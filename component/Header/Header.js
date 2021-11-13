import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

import brand_logo from '../../images/brand_logo.png'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import useAuth from '../Context/useAuth';

const user_icon = <FontAwesomeIcon icon={faUser} />

const Header = () => {
  const {user, handleLogOut} = useAuth();
    return (
     
           
        <>
        
        <Navbar bg="dark" variant="dark" sticky="top"  collapseOnSelect expand="lg">
          <Container>
          <Navbar.Brand as={Link} to="/"><img
        src={brand_logo}
        width="250"
        height="70"
        className="d-inline-block align-top"
        alt="Timzee Brand Logo"
      /></Navbar.Brand>
         
          <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end" >
   
    <Nav.Link as={Link} className='text-white' to="/home">Home</Nav.Link>
    <Nav.Link as={Link} className='text-white' to="/allProducts">Explore</Nav.Link>
    {
      user.email && 
      <>
      <Nav.Link as={Link} className='text-white' to="/dashboard">Dashboard</Nav.Link>
      <button className='btn btn-danger' onClick={handleLogOut}>Logout {user?.email}</button>
    
      </>
    }

    {
      !user.email && 
      <NavDropdown title={user_icon} >
      <NavDropdown.Item as={Link} to='/login'>Login</NavDropdown.Item>
      <NavDropdown.Item as={Link} to='/register'>Register</NavDropdown.Item>
      
    </NavDropdown>
    }
  
   
   
    


    </Navbar.Collapse>
          
          </Container>
        </Navbar>
        
      </>



            
        
    );
};

export default Header;