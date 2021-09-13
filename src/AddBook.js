import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./index.css";

export class AddBook extends Component {
  render() {
    return (
      <div id="modalDiv">
        <Modal show={this.props.show} onHide={this.props.handelDisplayAddModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add a Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.props.handelAddModal}>
              <Form.Group className="mb-3">
                <Form.Label>Book Title</Form.Label>
                <Form.Control
                  type="text"
                  name="bookTitle"
                  placeholder="Enter Book Title"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Book Description</Form.Label>
                <Form.Control
                  type="text"
                  name="bookDescription"
                  placeholder="Enter Book Description"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Book Status</Form.Label>
                <Form.Control
                  type="text"
                  name="bookStatus"
                  placeholder="Enter Book Status"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Create New Book!
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default AddBook;
