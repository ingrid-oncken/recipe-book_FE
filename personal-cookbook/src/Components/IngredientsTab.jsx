import Macarons from '../data/macarons944X270.png'
import { Card, Form, ListGroup } from 'react-bootstrap'

const IngredientsTab = () => {
  return (
    <Card.Body>
      
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
  )
}
export default IngredientsTab
