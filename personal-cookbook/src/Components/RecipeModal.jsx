import { useState } from 'react'
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  ListGroup,
  Modal,
  Row,
  Tab,
} from 'react-bootstrap'

import { FaListOl, FaUserEdit, FaRegClock, FaTrashAlt } from 'react-icons/fa'

import { GiCookingPot, GiForkKnifeSpoon, GiSecretBook } from 'react-icons/gi'
import { RiKnifeLine } from 'react-icons/ri'

// ! Critical comment
// * Highlighted comment
// TODO: to do comment
// ? question comment
// normal comment

const RecipeModal = (props) => {
  const [newRecipe, setNewRecipe] = useState({
    recipeTitle: '',
    authorName: '',
    user: '',
    cathegory: '',
    nPortions: '',
    prepTime: '',
    totalTime: '',
    prepMethods: [],
    tags: [],
    ingredients: '',
    prepSteps: '',
    personalNote: '',
    pictures: '',
  })

  const handleChange = (e) => {
    console.log(e.target.value)
    let fieldToUpdate = e.target.name
    setNewRecipe({ ...newRecipe, [fieldToUpdate]: e.target.value })
  }

  const handlePrepCheckboxes = (e) => {
    if (e.target.checked) {
      setNewRecipe({
        ...newRecipe,
        prepMethods: [...newRecipe.prepMethods, e.target.value],
      })
    } else {
      const newRecipieMethod = newRecipe.prepMethods.filter(
        (method) => method !== e.target.value
      )
      console.log('newRecipieMethod', newRecipieMethod)
      setNewRecipe({
        ...newRecipe,
        prepMethods: [...newRecipieMethod],
      })

      // newRecipe.prepMethods.filter((method) =>
      //   console.log('METHOD', method, e.target.method)
      // )
    }
    console.log('newRecipe.prepMethods out of IF ELSE', newRecipe.prepMethods)
  }
  console.log(
    'newRecipe.prepMethods out of handlePrepCheckboxes',
    newRecipe.prepMethods
  )
  const handleTagsCheckboxes = (e) => {
    if (e.target.checked) {
      setNewRecipe({
        ...newRecipe,
        tags: [...newRecipe.tags, e.target.value],
      })
      console.log('newRecipe.tags', newRecipe.prepMethods)
    }
  }


  const fetchMethods = () => {}

  const handleSubmit = async (e) => {
    e.preventDefault()
    //recipes(newRecipe)

    try {
      let res = await fetch('http://localhost:3001/recipes', {
        method: 'POST',
        body: JSON.stringify(newRecipe),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      console.log(
        `clg RES of newRecipe from the fetch of RecipeModal --> ${res}`
      )

      if (res.ok) {
        // TODO: display a green line "RECIPE SUCESSFUL SAVED"
        emptyModal()
      } else {
        // TODO: display a green line "sth went wrong and couldn't save the recipe"
      }
    } catch (error) {
      console.log(`Catch error of fetching a newRecipe -- ${error}`)
    }
  }

  const emptyModal = () => {
    setNewRecipe({
      recipeTitle: '',
      authorName: '',
      user: '',
      cathegory: '',
      nPortions: '',
      prepTime: '',
      totalTime: '',
      prepMethods: [],
      tags: [],
      ingredients: [],
      prepSteps: '',
      personalNote: '',
      pictures: [],
    })
  }

  const methodsArr = [
    'oven',
    'stove',
    'robot',
    'deep-fry',
    'air-fry',
    'multicooker',
    'BBQ',
    'sous-vide',
    'microwave',
  ]

  const tagsArr = [
    'Appetizer',
    'Fish',
    'Fit',
    'Gluten-free',
    'Halal',
    'Kosher',
    'Meat',
    'Poultry',
    'Seafood',
    'Tapas',
    'Vegan',
    'Ovolacto-vegetarian',
  ]

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      id="recipe-modal"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">New Recipe</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Form onSubmit={handleSubmit}>
            {/* Start recipe title */}
            <Row>
              <Col xs={12} md={8}>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">T</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    placeholder="Recipe title"
                    aria-label="recipe title"
                    aria-describedby="basic-addon1"
                    name="recipeTitle"
                    value={newRecipe.recipeTitle}
                    onChange={handleChange}
                    required
                  />
                </InputGroup>
              </Col>
              <Col xs={6} md={4}>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text>C</InputGroup.Text>
                  </InputGroup.Prepend>

                  <Form.Control
                    as="select"
                    name="cathegory"
                    value={newRecipe.cathegory}
                    onChange={handleChange}
                  >
                    <option>Cathegory</option>
                    <option>Brekfast</option>
                    <option>Salad</option>
                    <option>Lunch</option>
                    <option>Soup</option>
                    <option>Snack</option>
                    <option>Desseart</option>
                  </Form.Control>
                </InputGroup>
              </Col>
            </Row>
            {/* End of recipe title */}
            <Row>
              {/* Start author name */}
              <Col xs={12} md={8}>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon3">
                      <FaUserEdit />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    id="basic-url"
                    aria-describedby="basic-addon3"
                    placeholder="Author name or url"
                    aria-label="Author name or url"
                    name="authorName"
                    value={newRecipe.authorName}
                    onChange={handleChange}
                  />
                </InputGroup>
              </Col>
              {/* End of author name */}

              {/* Start portions */}
              <Col xs={6} md={4}>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <GiForkKnifeSpoon />
                    </InputGroup.Text>
                  </InputGroup.Prepend>

                  <Form.Control
                    as="select"
                    name="nPortions"
                    value={newRecipe.nPortions}
                    onChange={handleChange}
                  >
                    <option>Portions</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                  </Form.Control>
                </InputGroup>
              </Col>
              {/* End of portions */}
            </Row>
            <Row>
              {/* Start preparation time */}
              <Col xs={6} md={6}>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <RiKnifeLine />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    aria-label="preparation time"
                    placeholder="hh:mm"
                    name="prepTime"
                    value={newRecipe.prepTime}
                    onChange={handleChange}
                  />

                  <InputGroup.Append className="d-none d-xs-none d-md-block">
                    <InputGroup.Text>prep. time</InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
              </Col>
              {/* End of preparation time */}

              {/* Start total time */}
              <Col xs={6} md={6}>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <FaRegClock />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    aria-label="total time"
                    placeholder="hh:mm"
                    name="totalTime"
                    value={newRecipe.totalTime}
                    onChange={handleChange}
                  />
                  <InputGroup.Append>
                    <InputGroup.Text className="d-none d-xs-none d-md-block">
                      total
                    </InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
              </Col>
              {/* End of total time */}
            </Row>

            {/* Start tags Tab */}
            <Tab.Container id="list-group-tabs-example">
              <Row>
                <Col sm={12}>
                  <ListGroup horizontal>
                    <ListGroup.Item action variant="warning" href="#link1">
                      Cooking Method
                    </ListGroup.Item>
                    <ListGroup.Item action variant="warning" href="#link2">
                      Tags
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col sm={12}>
                  <Tab.Content>
                    <Tab.Pane eventKey="#link1">
                      <div className="mx-3 mt-2">
                        <Form.Group>
                          {methodsArr.map((method) => (
                            <Form.Check
                              inline
                              key={`${method}`}
                              label={`${method}`}
                              name={`${method}`}
                              value={`${method}`}
                              onChange={handlePrepCheckboxes}
                              type="checkbox"
                              className="prepMethodsClass"
                            />
                          ))}
                        </Form.Group>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link2">
                      <div className="mx-3 mt-2">
                        <Form.Group>
                          {tagsArr.map((tags) => (
                            <Form.Check
                              inline
                              key={`${tags}`}
                              label={`${tags}`}
                              name={`${tags}`}
                              value={`${tags}`}
                              onChange={handleTagsCheckboxes}
                              type="checkbox"
                              className="tagsClass"
                            />
                          ))}
                        </Form.Group>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
            {/* End of tags Tab */}

            <InputGroup className="my-3">
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <FaListOl />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                as="textarea"
                aria-label="With textarea"
                placeholder="Ingredients separeted by coma: flour, chocolate, baking powder..."
                name="ingredients"
                value={newRecipe.ingredients}
                onChange={handleChange}
              />
            </InputGroup>
            <InputGroup className="my-3">
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <GiCookingPot />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                as="textarea"
                aria-label="With textarea"
                placeholder="Preparation steps..."
                name="prepSteps"
                value={newRecipe.prepSteps}
                onChange={handleChange}
              />
            </InputGroup>
            <InputGroup className="my-3">
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <GiSecretBook />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="With textarea"
                placeholder="Personal notes"
                name="personalNote"
                value={newRecipe.personalNote}
                onChange={handleChange}
              />
            </InputGroup>
            <Form.Group controlId="formFileSm" className="mb-3">
              <Form.Label>Upload your pictures</Form.Label>
              <Form.Control type="file" size="sm" multiple />
            </Form.Group>
          </Form>
        </Container>
      </Modal.Body>
      <Modal.Footer className="px-4">
        <Button
          variant="outline-danger"
          className="mr-auto"
          // onClick={emptyModal()}
        >
          <FaTrashAlt />
        </Button>
        <Button onClick={props.onHide}>Save</Button>
      </Modal.Footer>
    </Modal>
  )
}
export default RecipeModal
