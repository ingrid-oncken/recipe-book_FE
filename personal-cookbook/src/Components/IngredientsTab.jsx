import Macarons from '../data/macarons944X270.png'
import { Card, Form, ListGroup } from 'react-bootstrap'

const IngredientsTab = () => {
  return (
    <Card.Body>
      <Card.Subtitle className="my-3 text-muted text-left">
        Macaron shell
      </Card.Subtitle>
      <Card.Text className="text-left">
        <ul>
          <li className="my-2">
            <Form.Check type="checkbox" label="195 g ground almonds" />
          </li>
          <li className="my-2">
            <Form.Check type="checkbox" label="330 g icing sugar" />
          </li>
          <li className="my-2">
            <Form.Check type="checkbox" label="180 g egg whites" />
          </li>
          <li className="my-2">
            <Form.Check type="checkbox" label="81 g caster sugar" />
          </li>
          <li className="my-2">
            <Form.Check type="checkbox" label="15 g cocoa powder" />
          </li>
          <li className="my-2">
            <Form.Check type="checkbox" label="pink food colouring" />
          </li>
          <li className="my-2">
            <Form.Check type="checkbox" label="brown food colouring" />
          </li>
          <li className="my-2">
            <Form.Check type="checkbox" label="yellow food colouring" />
          </li>
        </ul>
      </Card.Text>
    </Card.Body>
  )
}
export default IngredientsTab
