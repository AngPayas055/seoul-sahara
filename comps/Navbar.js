import Link from 'next/link'
import { Button, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

const Navbars = () => {
    return ( 
        <Navbar bg="light" expand="sm">
            <Container >
                {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto me-auto">
                    <Nav.Link href="/" className="red-text">Home</Nav.Link>
                    <Nav.Link href="/about" className="red-text">About</Nav.Link>
                    <Nav.Link href="/menu" className="red-text">Menu</Nav.Link>
                    <Nav.Link href="franchise" className="red-text">Franchise</Nav.Link>
                    <Nav.Link href="contact" className="red-text">Contact Us</Nav.Link>  
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
     );
}
 
export default Navbars;