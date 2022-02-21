import {
  Button,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  FormControl,
  InputGroup,
  ListGroup,
  Modal,
  Row,
  Tab,
} from 'react-bootstrap'

import {
  FaListOl,
  FaUserEdit,
  FaRegClock,
  FaTags,
  FaTrashAlt,
} from 'react-icons/fa'

import { GiCookingPot, GiForkKnifeSpoon, GiSecretBook } from 'react-icons/gi'
import { RiKnifeLine } from 'react-icons/ri'

const RecipeModal = (props) => {
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
          {/* Start recipe title */}
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">T</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Recipe title"
              aria-label="recipe title"
              aria-describedby="basic-addon1"
            />
            <DropdownButton
              as={InputGroup.Append}
              variant="outline-secondary"
              menuAlign="right"
              title="Cathegory"
              id="input-dropdown-modal"
            >
              <Dropdown.Item href="#">Brekfast</Dropdown.Item>
              <Dropdown.Item href="#">Salad</Dropdown.Item>
              <Dropdown.Item href="#">Lunch/Dinner</Dropdown.Item>
              <Dropdown.Item href="#">Soup</Dropdown.Item>
              <Dropdown.Item href="#">Snack</Dropdown.Item>
              <Dropdown.Item href="#">Desseart</Dropdown.Item>
            </DropdownButton>
          </InputGroup>
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

                <Form.Control as="select">
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
                <FormControl aria-label="preparation time" placeholder="hh" />
                <FormControl aria-label="preparation time" placeholder="mm" />
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
                <FormControl aria-label="preparation time" placeholder="hh" />
                <FormControl aria-label="preparation time" placeholder="mm" />
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
                    <Form>
                      <div className="mx-3 mt-2">
                        <Form.Group controlId="formBasicCheckbox">
                          <Form.Check
                            inline
                            type="radio"
                            label="Air-fry"
                            id="Air-fry"
                            name="formHorizontalRadios"
                          />
                          <Form.Check
                            inline
                            type="radio"
                            label="BBQ"
                            id="BBQ"
                            name="formHorizontalRadios"
                          />
                          <Form.Check
                            inline
                            type="radio"
                            label="Deep-fry"
                            id="Deep-fry"
                            name="formHorizontalRadios"
                          />
                          <Form.Check
                            inline
                            type="radio"
                            label="Microwave"
                            id="Microwave"
                            name="formHorizontalRadios"
                          />
                          <Form.Check
                            inline
                            type="radio"
                            label="Multicooker"
                            id="Multicooker"
                            name="formHorizontalRadios"
                          />
                          <Form.Check
                            inline
                            type="radio"
                            label="Oven"
                            id="Oven"
                            name="formHorizontalRadios"
                          />
                          <Form.Check
                            inline
                            type="radio"
                            label="Robot"
                            id="Robot"
                            name="formHorizontalRadios"
                          />
                          <Form.Check
                            inline
                            type="radio"
                            label="Sous vide"
                            id="Sous vide"
                            name="formHorizontalRadios"
                          />
                          <Form.Check
                            inline
                            type="radio"
                            label="Stove"
                            id="Stove"
                            name="formHorizontalRadios"
                          />
                          <Form.Check
                            inline
                            type="radio"
                            label="Vapor"
                            id="Vapor"
                            name="formHorizontalRadios"
                          />
                        </Form.Group>
                      </div>
                    </Form>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link2">
                    <Form>
                      <div className="mx-3 mt-2">
                        <Form.Group controlId="formBasicCheckbox">
                          <Form.Check
                            inline
                            type="checkbox"
                            label="Appetizer"
                            id="Appetizer"
                            name="formHorizontalChekboxes"
                          />
                          <Form.Check
                            inline
                            type="checkbox"
                            label="Fish"
                            id="Fish"
                            name="formHorizontalChekboxes"
                          />
                          <Form.Check
                            inline
                            type="checkbox"
                            label="Fit"
                            id="Fit"
                            name="formHorizontalChekboxes"
                          />
                          <Form.Check
                            inline
                            type="checkbox"
                            label="Gluten-free"
                            id="Gluten-free"
                            name="formHorizontalChekboxes"
                          />
                          <Form.Check
                            inline
                            type="checkbox"
                            label="Halal"
                            id="Halal"
                            name="formHorizontalChekboxes"
                          />
                          <Form.Check
                            inline
                            type="checkbox"
                            label="Kosher"
                            id="Kosher"
                            name="formHorizontalChekboxes"
                          />
                          <Form.Check
                            inline
                            type="checkbox"
                            label="Meat"
                            id="Meat"
                            name="formHorizontalChekboxes"
                          />
                          <Form.Check
                            inline
                            type="checkbox"
                            label="Poultry"
                            id="Poultry"
                            name="formHorizontalChekboxes"
                          />
                          <Form.Check
                            inline
                            type="checkbox"
                            label="Seafood"
                            id="Seafood"
                            name="formHorizontalChekboxes"
                          />
                          <Form.Check
                            inline
                            type="checkbox"
                            label="Tapas"
                            id="Tapas"
                            name="formHorizontalChekboxes"
                          />
                          <Form.Check
                            inline
                            type="checkbox"
                            label="Vegan"
                            id="Vegan"
                            name="formHorizontalChekboxes"
                          />
                          <Form.Check
                            inline
                            type="checkbox"
                            label="Ovolacto-vegetarian"
                            id="Ovolacto-vegetarian"
                            name="formHorizontalChekboxes"
                          />
                        </Form.Group>
                      </div>
                    </Form>
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
              placeholder="Ingredients"
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
            />
          </InputGroup>
          <Form>
            <Form.Group>
              <Form.File id="exampleFormControlFile1" />
            </Form.Group>
          </Form>
        </Container>
      </Modal.Body>
      <Modal.Footer className="px-4">
        <Button variant="outline-danger" className="mr-auto">
          <FaTrashAlt />
        </Button>
        <Button onClick={props.onHide} variant="warning">
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
export default RecipeModal
