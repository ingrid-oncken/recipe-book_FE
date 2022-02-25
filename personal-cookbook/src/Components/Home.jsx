import { CardDeck, Col } from 'react-bootstrap'

import RecipeCard from './RecipeCard'

const Home = () => {
  return (
    
      <Col sm={12} md={9} xl={8}>
        <h1>Test</h1>
        <CardDeck className="mb-3">
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </CardDeck>
      </Col>
  
  )
}

export default Home
