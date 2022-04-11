import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const RecipeCards = () => {
  
  const fetchRecipes = async (e) => {

    console.log('fetch recipes before try')
    try {
      let res = await fetch(
        

        `http://localhost:3001/recipes/62458c33f9aee5b9918c66c7`,
        {
          method: 'GET',
          body: JSON.stringify(newRecipe),
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ',
          },
        }
      )

      console.log('clg RES of newRecipe from the fetch of RecipeModal -->', res)
      console.log('newRecipe.authorName', newRecipe.authorName)

      const output = await res.json()
      console.log('OUTPUT', output)

      if (res.ok) {
        setNewRecipe(output)
        console.log('CLG RES IF RES.OK', res)
      } else {
        console.log('ELSE === !res.ok')
        // TODO: display a green line "sth went wrong and couldn't save the recipe"
      }
    } catch (error) {
      console.log('Catch error of fetching a newRecipe --', error)
    }
  }
  
  return (
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
      <Link className="card-link" to="/fullrecipe">
        See full recipe...
      </Link>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last opened 3 mins ago</small>
    </Card.Footer>
  </Card>
)}
export default RecipeCards
