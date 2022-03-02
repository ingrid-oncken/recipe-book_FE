import { useState } from 'react'
import Macarons from '../data/macarons944X270.png'
import { FaRegHeart } from 'react-icons/fa'
import {
  Button,
  Card,
  Container,
  Nav,
  Col,
  Tab,
  TabContent,
  TabPane,
} from 'react-bootstrap'
import IngredientsTab from './IngredientsTab'
import MethodTab from './MethodTab'
import Tabs from 'react-bootstrap/Tabs'

const FullRecipe = () => {
  const [key, setKey] = useState('home')

  return (
    <Container>
      {/* <Card id="full-recipe-card" className="mb-4">
        <Card.Img variant="top" src={Macarons} />
        <Card.ImgOverlay>
          <Card.Title className="text-left text-secondary">
            <FaRegHeart />
          </Card.Title>
        </Card.ImgOverlay>
        <Card.Header>
          <Nav
            variant="tabs"
            // defaultActiveKey="ingredients"
            id="recipe-nav-tabs"
            activeKey={key}
            onSelect={(k) => setKey(k)}
          >
            <Nav.Item>
              <Nav.Link eventKey="#first" className="text-warning">
                Ingredients
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="#second" className="text-warning">
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


        <Card.Body>
          
        </Card.Body>
        <Card.Footer className="text-muted">
          <Button variant="warning">Edit this recipe</Button>
        </Card.Footer>
      </Card> */}

      <Card>
        {/* <Card.Img variant="top" src={Macarons} />
        <Card.ImgOverlay>
          <Card.Title className="text-left text-secondary">
            <FaRegHeart />
          </Card.Title>
        </Card.ImgOverlay> */}
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="card-header-tabs"
        >
          <Tab eventKey="home" title="Home" className="card-body">
            <IngredientsTab />
          </Tab>
          <Tab eventKey="profile" title="Profile" className="card-body">
            teste 2
          </Tab>
          <Tab
            eventKey="contact"
            title="Contact"
            disabled
            className="card-body"
          >
            lalalalalal
          </Tab>
        </Tabs>
      </Card>
    </Container>
  )
}
export default FullRecipe
