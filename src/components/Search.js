import React from 'react';
import { Form, Input } from 'reactstrap';

const Search = () => {
  return (
    <div className="col">
      <Form className="row align-items-center">
        <div className="col-auto pr-0">
          <span className="fe fe-search text-muted"></span>
        </div>
        <div className="col">
          <Input
            type="search"
            className="form-control form-control-flush search"
            placeholder="Search"
          ></Input>
        </div>
      </Form>
    </div>
  );
};

export default Search;
