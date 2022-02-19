import {
  Button,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  FormControl,
  InputGroup,
  Modal,
  Nav,
  Row,
} from 'react-bootstrap'
import { FaUserEdit, FaRegClock, FaTags } from 'react-icons/fa'
import { GiForkKnifeSpoon } from 'react-icons/gi'
import { RiKnifeLine } from 'react-icons/ri'

const RecipeModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
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
              id="input-group-dropdown-2"
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
                <FormControl
                  aria-label="number of portions"
                  placeholder="Portions"
                />
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
          <Row>
            {/* Start tags nav */}
            <Col xs={12}>
              <Nav
                className="justify-content-center"
                variant="pills"
                defaultActiveKey="/home"
              >
                <Nav.Item>
                  <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1">Option 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="disabled" disabled>
                    Disabled
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            {/* End of tags nav */}
          </Row>

          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>With textarea</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl as="textarea" aria-label="With textarea" />
          </InputGroup>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}
export default RecipeModal
