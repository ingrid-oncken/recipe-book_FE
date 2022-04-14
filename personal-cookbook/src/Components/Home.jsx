import { Row, Col } from 'react-bootstrap'
import RecipeCard from './RecipeCard'
import { useState, useEffect } from 'react'
import RecipeCards from './RecipeCard'

const Home = () => {
  const [recipe, setRecipe] = useState([])

  const fetchRecipes = async (e) => {
    //console.log('fetch recipes before try')
    try {
      let res = await fetch(
        `${process.env.REACT_APP_URL_FE}/recipes/62458c33f9aee5b9918c66c7`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${process.env.REACT_APP_TOKEN_USER}`,
          },
        }
      )

      //console.log('clg RES -->', res)
      // console.log('RECIPEEEESSSS!!!', recipe[2].recipeTitle)

      const output = await res.json()
      //console.log('OUTPUT', output[2].recipeTitle)

      if (res.ok) {
        setRecipe(output)

        console.log('CLG RES IF RES.OK', res)
      } else {
        console.log('ELSE === !res.ok')
        // console.log('CLG RES ELS !RES.OK')
      }
    } catch (error) {
      console.log('Catch error of fetching Recipes --', error)
    }
  }

  // const oneRecipe = recipe[2]
  // console.log('recipe!!!', oneRecipe)

  useEffect(() => {
    fetchRecipes()
  }, [])

  return (
    <Row>
      {recipe.map((r) => (
        <Col xs={12} md={9} xl={8} key={r._id}>
          <RecipeCards data={r} />
        </Col>
      ))}
    </Row>
  )
}

export default Home
