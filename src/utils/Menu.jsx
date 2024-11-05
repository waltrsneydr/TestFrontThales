import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function TopMenu() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="">
        <img src="https://pbs.twimg.com/profile_images/1012270191080804353/4bcUpot3_400x400.jpg" alt="Descripción de la imagen" style={{ height: '100px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="Home">Home</Nav.Link>
            <Nav.Link href="Contac">Contact</Nav.Link>
            <NavDropdown title="Login" id="basic-nav-dropdown">
              <NavDropdown.Item href="Persons">Persons</NavDropdown.Item>
              <NavDropdown.Item href="Companies">Companies</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="Others">
                Others
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopMenu;