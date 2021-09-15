import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export class UpdateBook extends Component {
  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.handelDisplayUpdateModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.props.handelUpdateModal}>
            <Form.Group className="mb-3">
              <Form.Label>title</Form.Label>
              <Form.Control
                type="text"
                name="bookTitle"
                placeholder="Enter title"
                defaultValue={this.props.selectedBookDataObj.title}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>description</Form.Label>
              <Form.Control
                type="text"
                name="bookDescription"
                placeholder="Enter Description"
                defaultValue={this.props.selectedBookDataObj.description}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>status</Form.Label>
              <Form.Control
                type="text"
                name="bookStatus"
                placeholder="Enter status"
                defaultValue={this.props.selectedBookDataObj.status}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                placeholder="Enter email"
                defaultValue={this.props.selectedBookDataObj.email}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Update!
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default UpdateBook;
