import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

function Header() {
    return (
        <header>
            <Navbar>
                <Container>
                    <Navbar.Brand className='m-auto'><h3>Snooker Points Counter</h3></Navbar.Brand>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;