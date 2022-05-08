import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <Container>
      <Navbar id="content" bg="light" variant="light" fixed= "top" expand="lg">
        <Navbar.Brand>
        <img className ="Logo-react" src="logo512.png" alt="logo-React"/>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
        <Nav>
          <NavDropdown title= "Product">
          <NavDropdown.Item href="Clothes"> Clothes </NavDropdown.Item>
          <NavDropdown.Item href="Food"> food </NavDropdown.Item>
          <NavDropdown.Item href="Electronic"> Electronic</NavDropdown.Item>
          <NavDropdown.Item href="Entertainement"> Entertainement</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="Promo">Promo</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="Blog"> Blog</Nav.Link>
          <Nav.Link href="About us">About us</Nav.Link>
          <Nav.Link href="Contact us">Contact us</Nav.Link>
        </Nav>
        <Form className="d-flex mx-auto">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="success">Search</Button>
      </Form>
        </Navbar.Collapse>
      </Navbar>

      <div id="main-container" className="d-grid h-100">
        <Form id="sign-in-form" className="text-center w-100">
          <img
            className="mb-4 Bootstrap-logo"
            src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
            alt="Bootstrap 5"
          />
          <h1 className="mb-3 fs-3 fw-normal"> Please sign in </h1>
          <Form.Group>
            <Form.Control
              id="sign-in-email-address"
              type="email"
              size="lg"
              placeholder="Email address"
              autoComplete="username"
              className="position-relative"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              id="sign-in-password"
              type="password"
              size="lg"
              placeholder="password"
              autoComplete="current password"
              className="position-relative"
            />
          </Form.Group>
          <Form.Group>
            <Form.Check
              id="remember-me"
              label="Remember me"
              className="d-flex justify-content-center mb-4"
            />
          </Form.Group>
          <div className="d-grid">
            <Button variant="primary" size="lg">
              Sign in{" "}
            </Button>
          </div>

          <p className="mt-5 text-muted">&copy; Youssef Dhaou </p>
        </Form>
      </div>
    </Container>
  );
}

export default App;
