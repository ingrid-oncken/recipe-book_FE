import {
  Accordion,
  Button,
  Card,
  Container,
  Col,
  Form,
  FormControl,
  Nav,
  Row,
} from 'react-bootstrap'

import MainNavbar from './MainNavbar'
import { Outlet } from 'react-router-dom'

const Layout = (props) => (
  <>
    {/* NAVBAR COMPONENT */}
    <MainNavbar />

    <Container fluid>
      {/* MAIN CONTAINS SIDEBAR + CONTENT */}
      <main>
        {/* SIDEBAR START */}
        <Row className="mt-3 flex-xl-nowrap">
          <Col sm={12} md={3} xl={2} className="layout-panel bg-light">
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
                    <Nav
                      defaultActiveKey="/home"
                      className="flex-column text-left"
                    >
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
                    <Nav
                      defaultActiveKey="/home"
                      className="flex-column text-left"
                    >
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
              <Card className="border-0  text-left">
                <Card.Header>
                  <Accordion.Toggle
                    as={Button}
                    variant="link"
                    eventKey="2"
                    className="pl-0  text-muted"
                  >
                    Lunch
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <Nav
                      defaultActiveKey="/home"
                      className="flex-column text-left"
                    >
                      <Nav.Link href="/home" className="text-secondary">
                        Quick Sandwiches
                      </Nav.Link>
                      <Nav.Link eventKey="link-2" className="text-secondary">
                        Chicken Piri-Piri
                      </Nav.Link>
                      <Nav.Link eventKey="link-2" className="text-secondary">
                        Lasagna
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
                    eventKey="3"
                    className="pl-0  text-muted"
                  >
                    Snacks
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    <Nav
                      defaultActiveKey="/home"
                      className="flex-column text-left"
                    >
                      <Nav.Link href="/home" className="text-secondary">
                        Kale Crackers
                      </Nav.Link>
                      <Nav.Link eventKey="link-1" className="text-secondary">
                        Sunflower Seeds Crackers
                      </Nav.Link>
                      <Nav.Link eventKey="link-2" className="text-secondary">
                        Roasted Chickpeas
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
                    eventKey="4"
                    className="pl-0  text-muted"
                  >
                    Dinner
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>
                    <Nav
                      defaultActiveKey="/home"
                      className="flex-column text-left"
                    >
                      <Nav.Link href="/home" className="text-secondary">
                        Pumpkin Soup
                      </Nav.Link>
                      <Nav.Link eventKey="link-1" className="text-secondary">
                        Minestrone Soup
                      </Nav.Link>
                      <Nav.Link eventKey="link-2" className="text-secondary">
                        Funghi Risotto
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
                    eventKey="5"
                    className="pl-0  text-muted"
                  >
                    Dessearts
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="5">
                  <Card.Body>
                    <Nav
                      defaultActiveKey="/home"
                      className="flex-column text-left"
                    >
                      <Nav.Link href="/home" className="text-secondary">
                        Berries Panna Cotta
                      </Nav.Link>
                      <Nav.Link eventKey="link-1" className="text-secondary">
                        Tiramissu
                      </Nav.Link>
                      <Nav.Link eventKey="link-2" className="text-secondary">
                        Mousse au Chocolate
                      </Nav.Link>
                    </Nav>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
          <Outlet />
        </Row>
        {/* SIDEBAR END */}
      </main>
    </Container>
  </>
)

export default Layout
