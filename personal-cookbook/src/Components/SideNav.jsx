import { Col, Form, FormControl } from 'react-bootstrap'

const SideNav = (props) => (
  
    <Col
      sm={12}
      md={3}
      xl={2}
      className="d-flex flex-colum justify-content-center sidenav-panel"
    >
      <Form className="d-flex py-3 align-items-center">
        <FormControl
          id="recipe-reach-input"
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
      </Form>
    </Col>
  
)

export default SideNav
