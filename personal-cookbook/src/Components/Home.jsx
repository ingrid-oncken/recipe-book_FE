import { CardDeck, Col } from 'react-bootstrap'

import RecipeCard from './RecipeCard'

const Home = () => {
  return (
    <Col sm={12} md={9} xl={8}>
      <CardDeck className="mb-3 mt-5">
        <RecipeCard />
      </CardDeck>
    </Col>
  )
}

export default Home
