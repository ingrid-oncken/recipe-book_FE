import { Button, Card } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history'

// const history = createBrowserHistory({ window })

// ReactDOM.render(
//   <HistoryRouter history={history}>
//     {/* The rest of your app goes here */}
//   </HistoryRouter>,
//   root
// )

const RecipeCards = ({ data }) => {
  const history = useNavigate()
  console.log(data._id, 'DATA._ID')

  const handleClick = (recipeId) => {
    console.log(recipeId)
    //event.preventDefault()
    const url = `recipe/${recipeId}`
    console.log(url)
    //alert(data.url)
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
