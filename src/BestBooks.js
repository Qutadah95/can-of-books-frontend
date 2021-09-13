import React from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import AddBook from "./AddBook";
import "./index.css";

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booksData: [],
      showAddModal: false,
    };
  }

  handelAddModal = (e) => {
    e.preventDefault();

    const reqBody = {
      title: e.target.bookTitle.value,
      description: e.target.bookDescription.value,
      status: e.target.bookStatus.value,
      email: e.target.email.value,
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

  handelDeleteBook = (bookId) => {
    console.log("1");
    console.log(`${process.env.REACT_APP_API_URL}/books/${bookId}`);

    axios
      .delete(`${process.env.REACT_APP_API_URL}/books/${bookId}`)
      .then((deleteResponse) => {
        console.log("2");
        console.log(`${process.env.REACT_APP_API_URL}/books`);
        console.log(deleteResponse.data.deletedCount === 1);
        if (deleteResponse.data.deletedCount === 1) {
          const newBookArr = this.state.booksData.filter(
            (book) => book._id !== bookId
          );
          console.log("3");
          console.log(`${process.env.REACT_APP_API_URL}/books`);
          this.setState({ booksData: newBookArr });
        }
      })
      .catch(() => alert("something went wrong while deleting"));
    console.log("4");
    console.log(`${process.env.REACT_APP_API_URL}/books`);
  };

  handelDisplayAddModal = () => {
    this.setState({ showAddModal: !this.state.showAddModal });
  };

  componentDidMount = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/books`)
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

export default BestBooks;
