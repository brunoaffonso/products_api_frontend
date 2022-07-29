import { Container, Navbar, Nav } from 'react-bootstrap';
import AuthContext from '../../context/AuthContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

export default function Topbar() {
  const { user, logoutUser } = useContext(AuthContext);
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#">Produtos</Navbar.Brand>
          <Nav className="me-auto"></Nav>
          <div>
            {user ? (
              <>
                <Link to="/">Home</Link>
                <Link to="/protected">Protected Page</Link>
                <button onClick={logoutUser}>Logout</button>
              </>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
            )}
          </div>
        </Container>
      </Navbar>
    </>
  );
}
