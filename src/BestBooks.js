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
    }).catch(error => alert('the book collection is empty.'));


  }
  render() {


    return (
      <div>
        {
          this.state.books.length > 0 &&
          <>
            {
              this.state.books.map(books => {
                return (
                  <>
                    <Card style={{ width: '18rem' }}>
                      {/* <Card.Img variant="top" src={books.img} /> */}
                      <Card.Body>
                        <Card.Title>{books.title}</Card.Title>
                        <Card.Text>
                          {books.description}
                        </Card.Text>
                        <Card.Text>
                          {books.status}
                        </Card.Text>
                        <Card.Text>
                          {books.email}
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
