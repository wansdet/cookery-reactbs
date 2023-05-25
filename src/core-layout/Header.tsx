import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Cookery@Example</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                      <Nav.Link as={Link} to="/">Home</Nav.Link>
                      <NavDropdown title="Recipes" id="basic-nav-dropdown">
                          <NavDropdown.Item as={Link} to="recipes/search">Search Recipes</NavDropdown.Item>
                          <NavDropdown.Item as={Link} to="recipes/most-popular">Most Popular Recipes</NavDropdown.Item>
                          <NavDropdown.Item as={Link} to="recipes/browse-categories">Browse by Category</NavDropdown.Item>
                      </NavDropdown>
                      <NavDropdown title="My Recipes" id="basic-nav-dropdown">
                          <NavDropdown.Item as={Link} to="recipes/my-recipes">My Recipes</NavDropdown.Item>
                          <NavDropdown.Item as={Link} to="comments/my-comments">My Comments</NavDropdown.Item>
                          <NavDropdown.Item as={Link} to="recipes/create-recipe">Create Recipe</NavDropdown.Item>
                      </NavDropdown>
                      <NavDropdown title="Admin" id="basic-nav-dropdown">
                          <NavDropdown.Item as={Link} to="admin/manage-recipes">Manage Recipes</NavDropdown.Item>
                          <NavDropdown.Item as={Link} to="admin/manage-comments">Manage Comments</NavDropdown.Item>
                          <NavDropdown.Item as={Link} to="admin/manage-users">Manage Users</NavDropdown.Item>
                      </NavDropdown>
                      <Nav.Link as={Link} to="user/register">Register</Nav.Link>
                  </Nav>
                  <div className='account-links'>
                      <Nav className="justify-content-end">
                          { !localStorage.getItem('user') && <Nav.Link as={Link} to="/login">Login</Nav.Link> }
                          { !localStorage.getItem('user') && <Nav.Link as={Link} to="/logout">Logout</Nav.Link> }
                      </Nav>
                  </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;