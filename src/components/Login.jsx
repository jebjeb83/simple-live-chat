import React from 'react'
import {
  Form,
  Button
} from 'react-bootstrap'
const Login = (props) => {
  return (
    <div style={{ color: 'white' }}>
      <Form onSubmit={(event) => {
        event.preventDefault()
        props.setIsLoggedIn(true)
      }}>
        <Form.Group controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control 
          placeholder="Enter username"
          value={props.username}
          onChange={(e) => 
            props.setUsername(e.target.value)
          }
        />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  )
}

export default Login
