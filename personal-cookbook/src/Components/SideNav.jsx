import { Col, Form, FormControl, Nav } from 'react-bootstrap'

const SideNav = (props) => (
  <Col sm={12} md={3} xl={2} className="sidenav-panel">
    <Form className="d-flex pt-3">
      <FormControl
        id="recipe-reach-input"
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
      />
    </Form>
    <hr className="text-dark" />
    <Nav defaultActiveKey="/home" className="flex-column text-left">
      <Nav.Link href="/home">Active</Nav.Link>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav>
  </Col>
)

export default SideNav
