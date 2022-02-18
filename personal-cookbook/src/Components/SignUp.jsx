import logo from '../logo.svg'
import { Link } from 'react-router-dom'
import { Button, Col, Form, Image } from 'react-bootstrap'

const SignUp = () => (
  <Form className="form-signin py-5 border border-warning rounded shadow">
    <Form.Group>
      <div className="mb-4">
        <Image src={logo} className="App-logo" alt="logo" />
      </div>
      <Col sm={10} className="mx-auto">
        <Form.Control className="mb-2" placeholder="First name" />
        <Form.Control className="mb-4" placeholder="Last name" />
        <Form.Control type="email" placeholder="Email" />
        <Form.Text className="text-muted text-left">
          We'll never share your email with anyone else.
        </Form.Text>
      </Col>

      <Col sm={10} className="mx-auto"></Col>
    </Form.Group>

    <Form.Group controlId="formHorizontalPassword">
      <Col sm={10} className="mx-auto">
        <Form.Control type="password" placeholder="Password" />
      </Col>
    </Form.Group>

    <Form.Group>
      <Col>
        <Button variant="warning" type="submit">
          Sign up
        </Button>
      </Col>
    </Form.Group>
    <Col sm={10} className="mx-auto">
      <Form.Text className="text-muted">
        Already have an account?{' '}
        <Link to="/login" class="text-warning stretched-link">
          Login here
        </Link>{' '}
      </Form.Text>
    </Col>
  </Form>
)
export default SignUp
