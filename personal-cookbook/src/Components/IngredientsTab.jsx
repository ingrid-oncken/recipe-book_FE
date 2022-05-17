import Macarons from '../data/macarons944X270.png'
import { useState, useEffect } from 'react'
import { Card, Form, ListGroup } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const IngredientsTab = () => {
  const { recipeId } = useParams()
  console.log('recipeId from INGREDIENTS tab', recipeId)

  const Ingredients = () => {
  const { recipeId } = useParams()

  //console.log('recipeId HERE from Ingredients', recipeId)
  const [ingredients, setingredients] = useState({})

  //console.log('BEFORE FETCH')
  const fetchIngredients = async (e) => {
    //console.log('fetch Ingredients before try')
    try {
      let res = await fetch(
        `${process.env.REACT_APP_URL_FE}/recipes/${recipeId}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${process.env.REACT_APP_TOKEN_USER}`,
          },
        }
      )

      //console.log('clg RES from INGREDIENTS TAB COMPONENT-->', res)
    

      const output = await res.json()
      //console.log('OUTPUT FROM FULL RECIPE PAGE', output)

      if (res.ok) {
        setIngredients(output)

        //console.log('CLG RES IF RES.OK', res)
      } else {
        console.log('ELSE === !res.ok')
        
      }
    } catch (error) {
      console.log('Catch error of fetching Recipes --', error)
    }
  }
  //console.log('singleIngredients.recipeTitle', singleRecipe.recipeTitle)

  useEffect(() => {
    fetchIngredients()
  }, [])


  return (
    <Card.Body>
      <Card.Subtitle className="my-3 text-muted text-left">
        
      </Card.Subtitle>
      <div className="text-left card-text">
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
      </div>
    </Card.Body>
  )
}
export default IngredientsTab
