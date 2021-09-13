import React from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import AddBook from "./AddBook";

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
    console.log("******************************");
    console.log(reqBody);
    console.log(e.target.bookTitle.value);
    console.log("******************************");

    /**
     * Using axios you want to send the data back to the backend so it would create a new cat
     *
     * After that when you get the response for the added new cat, update the state with the new cat
     */

    axios
      .post(`${process.env.REACT_APP_API_URL}/books`, reqBody)
      .then((createdBookObject) => {
        this.state.booksData.push(createdBookObject.data); // push the new data into the state of the catsData
        this.setState({ booksData: this.state.booksData }); // update the data using setState to invoke the re-render
        this.handelDisplayAddModal(); // close the modal after we are done!
      })
      .catch(() => alert("Something went wrong while posting!"));
  };

  /**
   * Handel the Deletion of a cat by its ID
   */
  handelDeleteBook = (bookId) => {
    /**
     * Using axios you want to send the request with the ID of the cat as a param to backend so it delete that cat
     *
     * After that when you get the response and check if the delete count is == 1
     * if its == 1 then remove that cat from the state and the set the state to invoke the render function again.
     */

    // console.log('cat ID', catId);

    console.log(`${process.env.REACT_APP_API_URL}/books/${bookId}`);

    axios
      .delete(`${process.env.REACT_APP_API_URL}/books/${bookId}`)
      .then((deleteResponse) => {
        if (deleteResponse.data.deletedCount === 1) {
          const newBookArr = this.state.catsData.filter(
            (book) => book._id !== bookId
          );

          /**
           * I want to filter out the cat ID that I deleted, by returning only the cat object that doesn't match the id of the
           * cat that I deleted
           */
          this.setState({ booksData: newBookArr });
        }
      })
      .catch(() => alert("something went wrong while deleting"));

    console.log(`${process.env.REACT_APP_API_URL}/books/${bookId}`);
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
    console.log(`${process.env.REACT_APP_API_URL}/books`);
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
                  {/* ================================================ */}
                  {/* Show/ Hide the Add New Cat Modal Form */}
                  {this.state.showAddModal && (
                    <>
                      <AddBook
                        show={this.state.showAddModal}
                        handelAddModal={this.handelAddModal}
                        handelDisplayAddModal={this.handelDisplayAddModal}
                      />
                    </>
                  )}
                  {/* ================================================ */}
                  <>
                    <Card style={{ width: "18rem" }}>
                      {/* <Card.Img variant="top" src={books.img} /> */}
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
                  </>
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
