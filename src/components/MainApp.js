import { Nav, Navbar, Container } from "react-bootstrap";

export default function MainApp() {

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">GMG Library</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/book-list">Book List</Nav.Link>
            <Nav.Link href="/user">Users</Nav.Link>
            <Nav.Link href="/book-meta">Book Meta</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}