import React from 'react';
import { Input, Label, InputGroup } from 'reactstrap';
import { connect } from 'react-redux';
import {
  setTextFilter,
  sortByDate,
  sortByAmount
} from '../redux/actions/filters';

const InvoicesFilters = props => {
  return (
    <div className="row">
      <InputGroup className="col-md-6">
        <Label for="search">Search Invoices:</Label>
        <Input
          id="search"
          type="text"
          value={props.filters.text}
          onChange={e => {
            e.preventDefault();
            const selectedValue = e.target.value;
            console.log(selectedValue);
            props.dispatch(setTextFilter(selectedValue));
          }}
        />
      </InputGroup>
      <InputGroup className="col-md-6">
        <Label for="sortSelect">Sort By:</Label>
        <Input
          type="select"
          name="select"
          id="sortSelect"
          value={props.filters.sortBy}
          onChange={e => {
            const selectedValue = e.target.value;
            //console.log(selectedValue);
            if (selectedValue === 'date') {
              props.dispatch(sortByDate());
            } else if (selectedValue === 'amount') {
              props.dispatch(sortByAmount());
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </Input>
      </InputGroup>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(InvoicesFilters);
