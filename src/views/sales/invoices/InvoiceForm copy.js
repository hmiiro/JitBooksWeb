import React, { Component } from 'react';
import moment from 'moment';
import uuidv4 from 'uuid/v4';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import LineItems from './LineItems';

class InvoiceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createdAt: props.invoice ? props.invoice.createdAt : moment(),
      updatedAt: props.invoice ? moment() : '',
      calenderFocused: false,
      customer: props.invoice ? props.invoice.customer : '',
      invoiceDate: props.invoice ? moment(props.invoice.invoiceDate) : moment(),
      lineItems: props.invoice ? props.invoice.lineItems : [],
      totItems: props.invoice ? props.invoice.totItems : 0,
      totBTax: props.invoice ? props.invoice.totBTax : 0,
      totTax: props.invoice ? props.invoice.totTax : 0,
      totAmount: props.invoice ? props.invoice.totAmount : 0,
      totPaid: props.invoice ? props.invoice.totPaid : 0,
      totBal: props.invoice ? props.invoice.totBal : 0,
      error: ''
    };
  }

  locale = 'en-UG';
  currency = 'UGX';

  // handling functions
  //this handles invoice date changes.
  onInvoiceDateChange = invoiceDate => {
    // making sure the user doesnt clear the date with delete key
    if (invoiceDate) {
      this.setState(() => ({ invoiceDate }));
    }
  };
  //this handles invoice date focus.
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calenderFocused: focused }));
  };
  onCustomerChange = e => {
    const customer = e.target.value;
    this.setState(() => ({ customer }));
  };

  handleInvoiceChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLineItemChange = elementIndex => e => {
    let lineItems = this.state.lineItems.map((item, i) => {
      if (elementIndex !== i) return item;

      const target = e.target;
      const value = target.type === 'select' ? target.selected : target.value;
      const name = target.name;

      return { ...item, [name]: value };
    });
    this.setState({ lineItems });
  };

  handleAddLineItem = e => {
    this.setState({
      // use optimistic uuid for drag drop; in a production app this could be a database id
      lineItems: this.state.lineItems.concat([
        {
          id: uuidv4(),
          name: '',
          quantity: 1,
          price: 0.0,
          taxRate: 0
        }
      ])
    });
  };

  handleRemoveLineItem = elementIndex => e => {
    this.setState({
      lineItems: this.state.lineItems.filter((item, i) => {
        return elementIndex !== i;
      })
    });
  };

  handleReorderLineItems = newLineItems => {
    this.setState({
      lineItems: newLineItems
    });
  };

  handleFocusSelect = e => {
    e.target.select();
  };

  formatCurrency = amount => {
    return new Intl.NumberFormat(this.locale, {
      style: 'currency',
      currency: this.currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  calcLineItemsTotal = () => {
    return this.state.lineItems.reduce(
      (prev, cur) => prev + cur.quantity * cur.price,
      0
    );
  };

  calcTaxTotal = () => {
    return this.state.lineItems.reduce(
      (prev, cur) => prev + cur.quantity * cur.price * cur.taxRate,
      0
    );
  };

  calcGrandTotal = () => {
    return this.calcLineItemsTotal() + this.calcTaxTotal();
  };

  handleSaveInvoice = e => {
    e.preventDefault();

    if (this.state.lineItems.length <= 0 || this.calcLineItemsTotal() === 0) {
      // set error value
      this.setState({
        error: 'Please add some items to the invoice!'
      });
    } else {
      // clear error value and set all summary amounts
      this.setState(
        {
          error: '',
          totItems: this.state.lineItems.length,
          totBTax: this.calcLineItemsTotal(),
          totTax: this.calcTaxTotal(),
          totAmount: this.calcGrandTotal(),
          totPaid: 0,
          totBal: this.calcGrandTotal() - this.state.totPaid
        },
        () => {
          this.props.onSubmit({
            invoiceDate: this.state.invoiceDate.valueOf(),
            createdAt: this.state.createdAt.valueOf(),
            customer: this.state.customer,
            lineItems: this.state.lineItems,
            totItems: this.state.totItems,
            totBTax: this.state.totBTax,
            totTax: this.state.totTax,
            totAmount: this.state.totAmount,
            totPaid: this.state.totPaid,
            totBal: this.state.totBal
          });
        }
      );
    }
  };

  // rendering JSX from here
  render() {
    return (
      <div>
        <Form className="form" onSubmit={this.handleSaveInvoice}>
          <FormGroup className="row">
            <FormGroup className="col-sm-3">
              <Label for="invoiceDate">Invoice Date:</Label>
              <SingleDatePicker
                date={this.state.invoiceDate}
                onDateChange={this.onInvoiceDateChange}
                focused={this.state.calenderFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={() => false}
                displayFormat={'DD/MM/YYYY'}
              />
            </FormGroup>

            <FormGroup className="col-sm-3">
              <Label for="invNo">Invoice No:</Label>
              <Input
                type="text"
                name="invNo"
                id="invNo"
                onChange={this.onInvoiceNoChange}
              />
            </FormGroup>

            <FormGroup className="col-sm-3">
              <Label for="customer">Customer Details:</Label>
              <Input
                type="text"
                name="customer"
                id="customer"
                placeholder="Enter customer name"
                onChange={this.onCustomerChange}
                value={this.state.customer}
                required
              />
            </FormGroup>
          </FormGroup>

          <hr />

          {this.state.error && (
            <p style={{ color: 'red', fontSize: 30 }}>{this.state.error}</p>
          )}
          {/* Iterate the added items array from here */}
          <LineItems
            items={this.state.lineItems}
            currencyFormatter={this.formatCurrency}
            addHandler={this.handleAddLineItem}
            changeHandler={this.handleLineItemChange}
            focusHandler={this.handleFocusSelect}
            deleteHandler={this.handleRemoveLineItem}
            reorderHandler={this.handleReorderLineItems}
          />
          <FormGroup row className="row no-gutters justify-content-end">
            <div className="col-auto">
              <table
                className="table table-sm table-borderless fs--1 text-right"
                id="summary"
              >
                <thead>
                  <tr>
                    <th className="text-900">Subtotal:</th>
                    <td className="font-weight-bold">
                      {this.formatCurrency(this.calcLineItemsTotal())}
                    </td>
                  </tr>
                  <tr>
                    <th className="text-900">Sales Tax:</th>
                    <td className="font-weight-bold">
                      {this.formatCurrency(this.calcTaxTotal())}
                    </td>
                  </tr>
                  <tr className="border-top">
                    <th className="text-900">Grand Total:</th>
                    <td className="font-weight-bold">
                      {this.formatCurrency(this.calcGrandTotal())}
                    </td>
                  </tr>
                  <tr className="border-top border-2x font-weight-bold text-900">
                    <th>Amount Due:</th>
                    <td>{this.formatCurrency(this.calcGrandTotal())}</td>
                  </tr>
                </thead>
              </table>
            </div>
          </FormGroup>
          <FormGroup row>
            <Col sm={{ size: 10, offset: 10 }}>
              <Button color="success">Save Invoice</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default InvoiceForm;
