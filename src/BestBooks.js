import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  componentDidMount = () => {
  

    axios.get(`${process.env.REACT_APP_API_URL}/books`).then((bookResponse) => {

      this.setState({ books: bookResponse.data });
    }).catch(() => alert('the book collection is empty.'));


  }
  render() {


    return (
      <div>
        {
          this.state.books.length > 0 &&
          <>
            {
              this.state.books.map(book => {
                return (
                  <>
                    <Card style={{ width: '18rem' }}>
                      {/* <Card.Img variant="top" src={books.img} /> */}
                      <Card.Body>
                        <Card.Title>{book.title}</Card.Title>
                        <Card.Text>
                          {book.description}
                        </Card.Text>
                        <Card.Text>
                          {book.status}
                        </Card.Text>
                        <Card.Text>
                          {book.email}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </>
                )
              })
            }
          </>
        }
      </div>
    )
  }
}

export default BestBooks;
