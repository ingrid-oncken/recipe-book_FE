import { Card } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const RecipeCards = ({ data }) => {
  const history = useNavigate()

  const handleClick = (recipeId) => {
    const url = `recipe/${recipeId}`
    history.push(url)
  }

  console.log('console log data', data._id)
  return (
    <>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>{data.recipeTitle}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.
          </Card.Text>
          <Link
            className="card-link"
            to="/fullrecipe"
            onClick={() => handleClick(data._id)}
          >
            See full recipe...
          </Link>
        </Card.Body>
        ()
        <Card.Footer>
          <small className="text-muted">Last opened 3 mins ago</small>
        </Card.Footer>
      </Card>
    </>
  )
}
export default RecipeCards
