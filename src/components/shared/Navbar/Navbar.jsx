import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavbarAuthButtons from './NavbarAuthButtons';

function Navbar() {
  return (
    <BootstrapNavbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
      <BootstrapNavbar.Brand href="#">Navbar scroll</BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="navbarScroll" />
      <BootstrapNavbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Me</Nav.Link>
            <NavDropdown title="Other" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Github 1</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Github 2
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Github
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <NavbarAuthButtons />
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;