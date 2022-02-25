import { useState } from 'react'
import Macarons from '../data/macarons944X270.png'
import { FaRegHeart } from 'react-icons/fa'
import { Button, Card, Container, Form, ListGroup, Nav } from 'react-bootstrap'

const FullRecipe = () => {
  return (
    <Container>
      <Card id="full-recipe-card" className="mb-4">
        <Card.Img variant="top" src={Macarons} />
        <Card.ImgOverlay>
          <Card.Title className="text-left text-secondary">
            <FaRegHeart />
          </Card.Title>
        </Card.ImgOverlay>
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link className="text-warning">Ingredients</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="text-warning">Method</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#disabled" disabled>
                Video
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
      {/* IMPORT OF THE BODY HERE */}
        <Card.Body>
          <Card.Title>Macarons</Card.Title>
          <Card.Text>
            <ListGroup className="text-left mb-2">
              <Card.Subtitle className="my-2 text-muted">
                Macaron shell
              </Card.Subtitle>
              <ListGroup.Item className="border-0">
                <Form.Check type="checkbox" label="195 g ground almonds" />
              </ListGroup.Item>
              <ListGroup.Item className="border-0">
                <Form.Check type="checkbox" label="330 g icing sugar" />
              </ListGroup.Item>
              <ListGroup.Item className="border-0">
                <Form.Check type="checkbox" label="180 g egg whites" />
              </ListGroup.Item>
              <ListGroup.Item className="border-0">
                <Form.Check type="checkbox" label="81 g caster sugar" />
              </ListGroup.Item>
              <ListGroup.Item className="border-0">
                <Form.Check type="checkbox" label="15 g cocoa powder" />
              </ListGroup.Item>
              <ListGroup.Item className="border-0">
                <Form.Check type="checkbox" label="pink food colouring" />
              </ListGroup.Item>
              <ListGroup.Item className="border-0">
                <Form.Check type="checkbox" label="brown food colouring" />
              </ListGroup.Item>
              <ListGroup.Item className="border-0">
                <Form.Check type="checkbox" label="yellow food colouring" />
              </ListGroup.Item>
            </ListGroup>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Button variant="warning">Edit this recipe</Button>
        </Card.Footer>

        <Card.Body>tab METHOD</Card.Body>
      </Card>
    </Container>
  )
}
export default FullRecipe
