import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const RecipeCards = ({ data }) => {
  const history = useNavigate()
  //console.log(data._id, 'DATA._ID')

  const handleClick = (recipeId) => {
    //console.log('console.log(recipeId) in RecipeCard component', recipeId)
    //event.preventDefault()
    const url = `fullrecipe/${recipeId}`
    //console.log('this is the console.log(url)', url)

    history(url)
    //.push(url)
  }

  //console.log('console log data', data._id)
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
          <Button
            className="card-link"
            //to={data._Id}
            onClick={() => handleClick(data._id)}
          >
            See full recipe...
          </Button>
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
