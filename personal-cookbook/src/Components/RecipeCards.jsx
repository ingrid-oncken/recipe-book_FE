import { Card } from 'react-bootstrap'

const RecipeCards = () => (
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Recipe title</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
        Cathegory SHows Here
      </Card.Subtitle>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
      <Card.Link href="#">See full recipe...</Card.Link>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last opened 3 mins ago</small>
    </Card.Footer>
  </Card>
)
export default RecipeCards