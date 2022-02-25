import Macarons from '../data/macarons944X270.png'
import { Button, Card, Container, ListGroup, Nav } from 'react-bootstrap'

const FullRecipe = () => (
  <Container>
    <Card>
      <Card.Img variant="top" src={Macarons} />
      <Card.Header>
        <Nav variant="tabs" defaultActiveKey="#first">
          <Nav.Item>
            <Nav.Link href="#first" className="text-warning">
              Ingredients
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#link" className="text-warning">
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
        <Card.Title>Macarons</Card.Title>

        <Card.Text>
          <ListGroup>
            Macaron shell 195 g ground almonds 330 g icing sugar 180 g egg
            whites 81 g caster sugar 15 g cocoa powder pink food colouring brown
            food colouring yellow food colouring Chocolate ganache filling 100 g
            whipping cream 100 g dark chocolate couverture, chopped 25 g butter,
            softened ----- 100 g fresh raspberries Hazelnut ganache filling 100
            g whipping cream 50 g hazlenut paste 100 g dark chocolate couverture
            25 g butter, softened White chocolate ganache filling 100 g whipping
            cream 140 g white chocolate couverture 25 g butter, softened 10 ml
            Kirsch Decoration 50 g melted white chocolate hazelnuts, toasted and
            chopped pink and gold lustre dust pistachio nuts, finely ground
          </ListGroup>
        </Card.Text>
        <Button variant="warning">Edit this recipe</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  </Container>
)
export default FullRecipe
