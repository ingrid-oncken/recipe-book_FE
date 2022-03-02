import { useState } from 'react'
import Macarons from '../data/macarons944X270.png'
import { FaRegHeart } from 'react-icons/fa'
import {
  Button,
  Card,
  Container,
  Nav,
  Image,
  Tab,
  TabContent,
  TabPane,
} from 'react-bootstrap'
import IngredientsTab from './IngredientsTab'
import MethodTab from './MethodTab'
import Tabs from 'react-bootstrap/Tabs'

const FullRecipe = () => {
  const [key, setKey] = useState('home')

  return (
    <Container id="full-recipe-container" className="border rounded shadow-sm">
      <Image src={Macarons} className="mt-2" rounded fluid />

      <section className="mt-4">
        <h4>Macarons</h4>
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
    </Container>
  )
}
export default FullRecipe
