import React from 'react';
import { Row, Col, FormGroup, Label } from 'reactstrap';
const ItemsListLabels = () => (
  <React.Fragment>
    <Row form>
      <Col sm={1}>
        <FormGroup>
          <Label for="#">No:</Label>
        </FormGroup>
      </Col>
      <Col sm={3}>
        <FormGroup>
          <Label for="itemName">Product/Service Name:</Label>
        </FormGroup>
      </Col>

      <Col sm={1}>
        <FormGroup>
          <Label for="qty">Qty:</Label>
        </FormGroup>
      </Col>
      <Col sm={2}>
        <FormGroup>
          <Label for="itemPrice">Price:</Label>
        </FormGroup>
      </Col>
      <Col sm={1}>
        <FormGroup>
          <Label for="Tax">Tax:</Label>
        </FormGroup>
      </Col>

      <Col sm={2}>
        <FormGroup>
          <Label for="itemAmt">Amount:</Label>
        </FormGroup>
      </Col>
      <Col sm={1}>
        <FormGroup>
          <Label for="removeItem">Action:</Label>
        </FormGroup>
      </Col>
    </Row>
  </React.Fragment>
);

export default ItemsListLabels;
