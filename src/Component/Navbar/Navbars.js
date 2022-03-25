import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import "./Navbars.css"
import { Link } from "react-router-dom";
function Navbars() {
    return (
        <div className='fluid-container'>

            <Navbar collapseOnSelect expand="lg" variant="dark" style={{ backgroundColor: "#04111D" }}>
                <Container>
                    <Navbar.Brand href="#home">XERO Marketplace</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Link to="/" style={{textDecoration: "none"}}><Nav.Link href="#deets" className="tagss me-md-2">Explore</Nav.Link></Link>
                            <Link to="/mint" style={{textDecoration: "none"}}><Nav.Link href="#memes" className="tagss me-md-2">Mint NFTs</Nav.Link></Link>
                            <Link to="/mycollection" style={{textDecoration: "none"}}><Nav.Link href="#MyNFTs" className="tagss me-md-2">My NFTs</Nav.Link></Link>
                           <Link to="/land" style={{textDecoration: "none"}}><Nav.Link href="#Land" className="tagss me-md-2">Land</Nav.Link></Link>
                            <Link to="/dashboard" style={{textDecoration: "none"}}><Nav.Link href="#Deshboard" className="tagss me-md-2">Deshboard</Nav.Link></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default Navbars