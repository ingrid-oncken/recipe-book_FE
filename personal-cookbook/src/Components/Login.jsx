import logo from '../logo.svg'
import { Link } from 'react-router-dom'
import { Button, Col, Form, Image } from 'react-bootstrap'

const Login = () => (
  <Form className="form-signin py-5 border border-danger rounded shadow">
    <Form.Group>
      <div className="mb-4">
        <Image src={logo} className="App-logo" alt="logo" />
      </div>
      <Form.Label column sm={2}>
        Email
      </Form.Label>
      <Col sm={10} className="mx-auto">
        <Form.Control type="email" placeholder="Email" />
      </Col>
    </Form.Group>

    <Form.Group controlId="formHorizontalPassword">
      <Form.Label column sm={2}>
        Password
      </Form.Label>
      <Col sm={10} className="mx-auto">
        <Form.Control type="password" placeholder="Password" />
      </Col>
    </Form.Group>

    <Form.Group>
      <Col>
        <Button variant="warning" type="submit">
          Sign in
        </Button>
      </Col>
    </Form.Group>
    <Col sm={10} className="mx-auto">
      <Form.Text className="text-muted">
        Don't have an account yet?{' '}
        <Link to="/signup" class="text-warning stretched-link">
          Sign up here
        </Link>{' '}
      </Form.Text>
    </Col>
  </Form>
)
export default Login
