import { Component } from 'react'
import { Container, Form, Row } from 'react-bootstrap'

export default class FileUpload extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Form>
            <Form.Group className="mb-3" size="sm">
              <Form.Label>Upload your pictures</Form.Label>
              <input
                type="file"
                name="image"
                onchange={(e) => this.props.addFile(e)}
              />
            </Form.Group>
          </Form>
        </Row>
      </Container>
    )
  }
}
