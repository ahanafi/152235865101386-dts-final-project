import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavbar = styled(Navbar)`
  background:rgb(231, 234, 235);
  height:80px;
  box-shadow: 1px -2px 5px 1px black;
`;

const StyledBrand = styled(Navbar.Brand)`
  font-size:2rem;
`;

const StyledLink = styled(Link)`
  font-weight:600;
  padding:8px 25px;
  &:hover {
    transition: .35s ease-in-out;
    background: #92d6d5;
    border-radius: 25px;
    color: #0a5c58;
  }
`;

const NavigationBar = () => {
  const navigate = useNavigate();

  return (
    <StyledNavbar
      expand='lg'
      sticky='top'
      >
      <Container>
        <StyledBrand
          className='fw-bold'
          href='#'
          onClick={() => navigate('/')}
        >
          Qur&apos;an Online
        </StyledBrand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-md-auto'>
            <StyledLink to='/'>Home</StyledLink>
            <StyledLink to='/login'>Login</StyledLink>
            <StyledLink to='/register'>Register</StyledLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
}

export default NavigationBar;