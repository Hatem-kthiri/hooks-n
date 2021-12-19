import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import "./SideBar.css"
const SideBar = () => {
  return (
    <div>
       <Navbar bg="dark" variant="dark" className='navbar'>
    <Container>
    <Navbar.Brand href="#home"className='home'>CATEGORY</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home" className='line'style={{color:"orange"}}>POPULAR</Nav.Link>
      <Nav.Link href="#features" className='top' >TOP RATE</Nav.Link>
      <Nav.Link href="#pricing" className='now'>NOW PLAYING</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    </div>
  )
}

export default SideBar
