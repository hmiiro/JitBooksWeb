import React, { Component } from 'react';
import { Col, Button, Row, FormGroup, Input } from 'reactstrap';
import PropTypes from 'prop-types';

class LineItem extends Component {
  render = () => {
    const { index, name, quantity, price, taxRate } = this.props;
    return (
      <React.Fragment>
        <Row form>
          <Col sm={1}>
            <FormGroup>{index + 1}</FormGroup>
          </Col>
          <Col sm={3}>
            <FormGroup>
              <Input
                type="text"
                name="name"
                value={name}
                onChange={this.props.changeHandler(index)}
                required
              />
            </FormGroup>
          </Col>

          <Col sm={1}>
            <FormGroup>
              <Input
                type="number"
                name="quantity"
                step="1"
                value={quantity}
                onChange={this.props.changeHandler(index)}
                onFocus={this.props.focusHandler}
                required
              />
            </FormGroup>
          </Col>
          <Col sm={2}>
            <FormGroup>
              <Input
                type="number"
                name="price"
                step="0.01"
                min="0.01"
                value={price}
                onChange={this.props.changeHandler(index)}
                onFocus={this.props.focusHandler}
                required
              />
            </FormGroup>
          </Col>
          <Col sm={1}>
            <FormGroup>
              <Input
                type="select"
                name="taxRate"
                value={taxRate}
                onChange={this.props.changeHandler(index)}
              >
                <option value={0}>0%</option>
                <option value={0.18}>18%</option>
              </Input>
            </FormGroup>
          </Col>
          <Col sm={2}>
            <FormGroup>
              {this.props.currencyFormatter(quantity * price)}
            </FormGroup>
          </Col>

          <FormGroup>
            <Col sm={1}>
              <Button
                color="danger"
                name="removeItem"
                onClick={this.props.deleteHandler(index)}
              >
                -
              </Button>
            </Col>
          </FormGroup>
        </Row>
      </React.Fragment>
    );
  };
}

export default LineItem;

LineItem.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string,
  quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  taxRate: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
