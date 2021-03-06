import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Home(){
    return(
        <>
        
        <br></br>
  <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    {/* <Navbar.Collapse id="navbarScroll"> */}
    <Navbar.Collapse className='justify-content-end' >
      {/* <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      > */}
        <Nav.Link href="#action1"> <Link to="/signup" className='btn btn-success'>Register</Link></Nav.Link>
        
        <Nav.Link href="#action2"> <Link to="/login" className='btn btn-success'>Log in</Link></Nav.Link>
      {/* </Nav> */}
    </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    )
}
export default Home;