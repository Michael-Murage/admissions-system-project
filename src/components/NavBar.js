import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav >
            <Nav.Link href="/login">Login</Nav.Link>
            {/* <Nav.Link href="/signup">Signup</Nav.Link> */}
            <Nav.Link href="/students">Students</Nav.Link>
            <Nav.Link href="/courses">Courses</Nav.Link>
            <Nav.Link href="/instructors">Instructors</Nav.Link>
            {/* className="me-auto" */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar