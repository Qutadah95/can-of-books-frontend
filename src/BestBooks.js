import React from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import AddBook from "./AddBook";
import UpdateBook from "./UpdateBook";
import "./index.css";
import { withAuth0 } from "@auth0/auth0-react";

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booksData: [],
      showAddModal: false,
      showUpdateModal: false,
      selectedBookDataObj: {},
    };
  }

  handelAddModal = (e) => {
    e.preventDefault();

    const reqBody = {
      title: e.target.bookTitle.value,
      description: e.target.bookDescription.value,
      status: e.target.bookStatus.value,
      email: this.props.auth0.user.email,
    };

    axios
      .post(`${process.env.REACT_APP_API_URL}/books`, reqBody)
      .then((createdBookObject) => {
        this.state.booksData.push(createdBookObject.data);
        this.setState({ booksData: this.state.booksData });
        this.handelDisplayAddModal();
      })
      .catch(() => alert("Something went wrong while posting!"));
  };

  handelUpdateModal = (e) => {
    e.preventDefault();

    const reqBody = {
      title: e.target.bookTitle.value,
      description: e.target.bookDescription.value,
      status: e.target.bookStatus.value,
      email: e.target.email.value,
    };
    console.log(
      `${process.env.REACT_APP_API_URL}/books/${this.state.selectedBookDataObj._id}`
    );
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/books/${this.state.selectedBookDataObj._id}`,
        reqBody
      )
      .then((updatedBookObject) => {
        const updateBookArr = this.state.booksData.map((book) => {
          if (book._id === this.state.selectedBookDataObj._id) {
            book = updatedBookObject.data;

            return book;
          }

          return book;
        });

        this.setState({
          booksData: updateBookArr,
          selectedBookDataObj: {},
        });

        this.handelDisplayUpdateModal();
      })
      .catch(() => alert("Something went wrong!"));
  };

  handelDeleteBook = (bookId) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/books/${bookId}`)
      .then((deleteResponse) => {
        if (deleteResponse.data.deletedCount === 1) {
          const newBookArr = this.state.booksData.filter(
            (book) => book._id !== bookId
          );

          this.setState({ booksData: newBookArr });
        }
      })
      .catch(() => alert("something went wrong while deleting"));
  };

  handelDisplayAddModal = () => {
    this.setState({ showAddModal: !this.state.showAddModal });
  };
  handelDisplayUpdateModal = (BookObj) => {
    this.setState({
      showUpdateModal: !this.state.showUpdateModal,
      selectedBookDataObj: BookObj,
    });
  };

  componentDidMount = () => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/books?email=${this.props.auth0.user.email}`
      )
      .then((bookResponse) => {
        this.setState({ booksData: bookResponse.data });
      })
      .catch(() => alert("the book collection is empty."));
  };
  render() {
    return (
      <div>
        <div>
          <Button onClick={this.handelDisplayAddModal}>
            Show Add book Modal Form
          </Button>
        </div>
        {this.state.booksData.length > 0 && (
          <>
            {this.state.booksData.map((book) => {
              return (
                <div>
                  {this.state.showAddModal && (
                    <>
                      <AddBook
                        show={this.state.showAddModal}
                        handelAddModal={this.handelAddModal}
                        handelDisplayAddModal={this.handelDisplayAddModal}
                      />
                    </>
                  )}
                  {this.state.showUpdateModal && (
                    <>
                      <UpdateBook
                        show={this.state.showUpdateModal}
                        handelUpdateModal={this.handelUpdateModal}
                        handelDisplayUpdateModal={this.handelDisplayUpdateModal}
                        selectedBookDataObj={this.state.selectedBookDataObj}
                      />
                    </>
                  )}

                  <div id="booksDiv">
                    <Card>
                      <Card.Body>
                        <Card.Title>{book.title}</Card.Title>
                        <Card.Text>{book.description}</Card.Text>
                        <Card.Text>{book.status}</Card.Text>
                        <Card.Text>{book.email}</Card.Text>
                        <Button
                          variant="danger"
                          onClick={() => this.handelDeleteBook(book._id)}
                        >
                          Delete Book
                        </Button>
                        <br />
                        <Button
                          variant="warning"
                          onClick={() => this.handelDisplayUpdateModal(book)}
                        >
                          Update Book
                        </Button>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    );
  }
}

export default withAuth0(BestBooks);
