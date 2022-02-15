import {
  Accordion,
  Button,
  Card,
  Col,
  Form,
  FormControl,
  Nav,
} from 'react-bootstrap'

const SideNav = (props) => (
  <Col sm={12} md={3} xl={2} className="sidenav-panel bg-light">
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

    <Accordion>
      <Card className="border-0  text-left">
        <Card.Header>
          <Accordion.Toggle
            as={Button}
            variant="link"
            eventKey="0"
            className="pl-0 text-muted"
          >
            Brekfast
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <Nav defaultActiveKey="/home" className="flex-column text-left">
              <Nav.Link href="/home" className="text-secondary">
                Pancakes
              </Nav.Link>
              <Nav.Link eventKey="link-1" className="text-secondary">
                Quick bread
              </Nav.Link>
              <Nav.Link eventKey="link-2" className="text-secondary">
                Tapioca
              </Nav.Link>
            </Nav>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className="border-0  text-left">
        <Card.Header>
          <Accordion.Toggle
            as={Button}
            variant="link"
            eventKey="1"
            className="pl-0  text-muted"
          >
            Salads
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <Nav defaultActiveKey="/home" className="flex-column text-left">
              <Nav.Link href="/home" className="text-secondary">
                Classic Cesar
              </Nav.Link>
              <Nav.Link eventKey="link-1" className="text-secondary">
                Waldorf
              </Nav.Link>
              <Nav.Link eventKey="link-2" className="text-secondary">
                Mediterranean
              </Nav.Link>
            </Nav>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  </Col>
)

export default SideNav
