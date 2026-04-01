import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavbarAuthButtons from './NavbarAuthButtons';
import './Navbar.css';

function Navbar() {
  return (
    <BootstrapNavbar expand="lg" className="infohub-navbar">
      <Container fluid>
      <BootstrapNavbar.Brand href="#">InfoHub</BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="navbarScroll" />
      <BootstrapNavbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0">
            <Nav.Link href="#action1">Inicio</Nav.Link>
            <Nav.Link href="#action2">Mi perfil</Nav.Link>
            <NavDropdown title="Otros proyectos" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Proyecto GitHub 1</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Proyecto GitHub 2
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                GitHub
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="navbar-actions d-flex flex-column flex-lg-row align-items-stretch align-items-lg-center gap-3">
            <Form className="d-flex order-2 order-lg-1">
              <Form.Control
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Buscar en el sitio"
              />
              <Button variant="outline-success">Buscar</Button>
            </Form>
            <div className="order-1 order-lg-2">
              <NavbarAuthButtons />
            </div>
          </div>
          </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;