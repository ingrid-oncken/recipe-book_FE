import { useState, useEffect } from 'react'
import Macarons from '../data/macarons944X270.png'
//import { FaRegHeart } from 'react-icons/fa'
import { Container, Image, Tab } from 'react-bootstrap'
import IngredientsTab from './IngredientsTab'
import MethodTab from './MethodTab'
import Tabs from 'react-bootstrap/Tabs'
import Layout from './Layout'
import { useParams } from 'react-router-dom'

//console.log('entering FullRecipe component')

const FullRecipe = () => {
  const { recipeId } = useParams()

  //console.log('recipeId HERE from fullRecipe', recipeId)
  const [singleRecipe, setSingleRecipe] = useState({})

  //console.log('BEFORE FETCH')
  const fetchSingleRecipe = async (e) => {
    //console.log('fetch SINGLE RECIPE')
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

      //console.log('clg RES from FULL RECIPE COMPONENT-->', res)
      //console.log('ONE RECIPE FROM FULL RECIPE PAGE', recipe)

      const output = await res.json()
      //console.log('OUTPUT FROM FULL RECIPE PAGE', output)

      if (res.ok) {
        setSingleRecipe(output)

        //console.log('CLG RES IF RES.OK', res)
      } else {
        console.log('ELSE === !res.ok')
        
      }
    } catch (error) {
      console.log('Catch error of fetching Recipes --', error)
    }
  }
  //console.log('singleRecipe.recipeTitle', singleRecipe.recipeTitle)

  useEffect(() => {
    fetchSingleRecipe()
  }, [])

  return (
    <>
      <Layout />
      <Container
        id="full-recipe-container"
        className="border rounded shadow-sm"
      >
        <Image src={Macarons} className="mt-2" rounded fluid />

        {singleRecipe._id && (
          <section className="mt-4">
            <h4 className="text-dark">{singleRecipe.recipeTitle}</h4>
            <Tabs defaultActiveKey="second">
              <Tab eventKey="first" title="Ingredients">
                <IngredientsTab />
              </Tab>
              <Tab eventKey="second" title="Method">
                <MethodTab />
              </Tab>
              <Tab eventKey="third" title="Video" disabled>
                Hii, I am 3rd tab content
              </Tab>
            </Tabs>
          </section>
        )}
      </Container>
    </>
  )
}
export default FullRecipe
