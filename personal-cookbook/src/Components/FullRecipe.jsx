import { useState } from 'react'
import Macarons from '../data/macarons944X270.png'
import { FaRegHeart } from 'react-icons/fa'
import { Button, Card, Container, Nav } from 'react-bootstrap'
import IngredientsTab from './IngredientsTab'

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
          <Nav variant="tabs" defaultActiveKey="ingredients">
            <Nav.Item>
              <Nav.Link eventKey="ingredients" className="text-warning">
                Ingredients
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="ingredients" className="text-warning">
                Method
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#disabled" disabled>
                Video
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        {/* IMPORT CARD BODY HERE */}

        <IngredientsTab />

        <Card.Footer className="text-muted">
          <Button variant="warning">Edit this recipe</Button>
        </Card.Footer>
        <Card.Body>tab METHOD</Card.Body>
      </Card>
    </Container>
  )
}
export default FullRecipe
