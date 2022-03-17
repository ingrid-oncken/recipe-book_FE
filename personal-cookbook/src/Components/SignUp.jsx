import logo from '../logo.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Button, Col, Form, Image } from 'react-bootstrap'

const SignUp = () => {
  const [newUser, setNewUser] = useState({
    firstName: '',
    surname: '',
    email: '',
    password: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const handleChange = (e) => {
    console.log(e.target.value)
    const key = e.target.name
    setNewUser({ ...newUser, [key]: e.target.value })
  }

  return (
    <Form className="form-signin py-5 border border-warning rounded shadow">
      <Form.Group>
        <div className="mb-4">
          <Link to="/">
            <Image src={logo} className="App-logo" alt="logo" />
          </Link>
        </div>
        <Col sm={10} className="mx-auto">
          <Form.Control
            className="mb-2"
            placeholder="First name"
            value={newUser.name}
            onChange={handleChange}
            name="firstName"
          />
          <Form.Control
            className="mb-4"
            placeholder="Last name"
            value={newUser.surname}
            onChange={handleChange}
            name="surname"
          />
          <Form.Control
            type="email"
            placeholder="Email"
            value={newUser.email}
            onChange={handleChange}
            name="email"
          />
          <Form.Text className="text-muted text-left">
            We'll never share your email with anyone else.
          </Form.Text>
        </Col>

        <Col sm={10} className="mx-auto"></Col>
      </Form.Group>

      <Form.Group controlId="formHorizontalPassword">
        <Col sm={10} className="mx-auto">
          <Form.Control
            type="password"
            placeholder="Password"
            value={newUser.password}
            onChange={handleChange}
            name="password"
          />
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
          <Link to="/login" className="text-warning stretched-link">
            Login here
          </Link>{' '}
        </Form.Text>
      </Col>
    </Form>
  )
}
export default SignUp
