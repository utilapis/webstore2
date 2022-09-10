import React from 'react';
import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Products } from './Products';

function Home() {
  return <h1>Home</h1>;
}


function NotFound() {
  return <h1>NotFound</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="home">Webstore 2.0</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="home">Inicio</Nav.Link>
              <Nav.Link as={Link} to="products">Productos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
