import ListGroup from 'react-bootstrap/ListGroup'

const CostumerComments = (props) => (
  <ListGroup>
    {props.selectedRecipe ? (
      props.selectedRecipe.comments.map((c) => (
        <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>
      ))
    ) : (
      <ListGroup.Item>Click on a dish card to see the reviews!</ListGroup.Item>
    )}
  </ListGroup>
)

export default CostumerComments
