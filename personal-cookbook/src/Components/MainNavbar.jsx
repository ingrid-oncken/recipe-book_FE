import logo from '../logo.svg'
import RecipeModal from './RecipeModal'

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'

const MainNavbar = () => {
  const [modalShow, setModalShow] = useState(false)

  return (
    <Navbar className="blue-saphire p-4" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} className="App-logo fixed-top m-auto" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto font-weight-bold">
            <Link to="/" className="nav-link">
              Home
            </Link>

            <Nav.Link onClick={() => setModalShow(true)}>+ Recipe</Nav.Link>
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      {/* <RecipeModal show={modalShow} onHide={() => setModalShow(false)} /> */}
    </Navbar>
  )
}
export default MainNavbar
