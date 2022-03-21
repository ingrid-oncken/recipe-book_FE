import logo from '../logo.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Button, Col, Form, Image } from 'react-bootstrap'

const Login = ({ login }) => {
  const [userLogin, setUserLogin] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    login(userLogin)
  }
  const handleChange = (e) => {
    console.log(e.target.value)
    const key = e.target.name
    setUserLogin({ ...userLogin, [key]: e.target.value })
  }

  return (
    <Form
      className="form-signin py-5 border border-danger rounded shadow"
      onSubmit={handleSubmit}
    >
      <Form.Group>
        <div className="mb-4">
          <Link to="/">
            <Image src={logo} className="App-logo" alt="logo" />
          </Link>
        </div>
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10} className="mx-auto">
          <Form.Control
            type="email"
            name="email"
            placeholder="Email"
            value={userLogin.email}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>

      <Form.Group controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Password
        </Form.Label>
        <Col sm={10} className="mx-auto">
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={userLogin.password}
            onChange={handleChange}
          />
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
          Don't have an account yet?
          <Link to="/signup" className="text-warning stretched-link">
            Sign up here
          </Link>{' '}
        </Form.Text>
      </Col>
    </Form>
  )
}
export default Login
