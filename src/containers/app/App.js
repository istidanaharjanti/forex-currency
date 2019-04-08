import React, { Component } from 'react';
import './App.css';
import { Card, Container, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';

import BoxCurrency from '../../components/boxCurrency/boxCurrency';
import AddCurrency from '../../components/addCurrency/addCurrency';

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Card className="App-header">
          <Card.Body>
            <Row className="input-box">
              <Col>
                <p className="text-italic">USD - United States Dollar</p>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text>USD</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl defaultValue="10000" style={{textAlign: 'right'}} />
                </InputGroup>
              </Col>
            </Row>
            <hr style={{ margin: '0 -20px' }} />
            <BoxCurrency>
              <Button variant="outline-dark">
                <i class="fa fa-trash"></i>
              </Button>
            </BoxCurrency>
            <AddCurrency />
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default App;
