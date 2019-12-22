import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import InvoiceList from './invoiceList';
import getVisibleInvoices from '../../../redux/selectors/invoices';
import InvoicesFilters from '../../../components/InvoicesFilters';

const Invoices = props => (
  <div>
    <div className="header mt-md-5">
      <div className="header-body">
        <div className="row align-items-center">
          <div className="col">
            {/* <h6 className="header">Overview</h6> */}
            <h1 className="header-title">Invoices</h1>
          </div>
          <div className="col-auto">
            <Link className="btn btn-primary lift" to="/sales/invoices/create">
              {' '}
              New Invoice
            </Link>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col">
            <ul className="nav nav-tabs nav-overflow header-tabs">
              <li className="nav-item">
                <Link className="nav-link active" to="/sales/invoices">
                  All
                  <span className="badge badge-pill badge-soft-secondary">
                    {props.invoices.length}
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <a href="#!" className="nav-link">
                  Draft{' '}
                  <span className="badge badge-pill badge-soft-secondary">
                    {props.invoices.length}
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#!" className="nav-link">
                  Paid{' '}
                  <span className="badge badge-pill badge-soft-secondary">
                    {props.invoices.length}
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#!" className="nav-link">
                  Not Paid{' '}
                  <span className="badge badge-pill badge-soft-secondary">
                    {props.invoices.length}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* search and table body */}

    <div
      className="card"
      data-toggle="lists"
      data-options='{"valueNames": ["orders-order", "orders-product", "orders-date", "orders-total", "orders-status", "orders-method"]}'
    >
      <div className="card-header">
        <div className="row align-items-center">
          <InvoicesFilters />
        </div>
      </div>
      {/* table */}

      <div className="table-responsive">
        <table className="table table-sm table-nowrap card-table">
          <thead>
            <tr>
              <th>
                <Link to="#" className="" data-sort="orders-order">
                  Invoice Date
                </Link>
              </th>
              <th>
                <Link to="#" className="" data-sort="orders-order">
                  Invoice No
                </Link>
              </th>
              <th>
                <Link to="#" className="" data-sort="orders-order">
                  Customer
                </Link>
              </th>
              <th>
                <Link to="#" className="" data-sort="orders-order">
                  Amount
                </Link>
              </th>
              <th>
                <Link to="#" className="" data-sort="orders-order">
                  Bal
                </Link>
              </th>
              <th>
                <Link to="#" className="" data-sort="orders-order">
                  Status
                </Link>
              </th>
              <th>Action</th>
            </tr>
          </thead>
          {props.invoices.map(invoice => {
            return <InvoiceList key={invoice.id} {...invoice} />;
          })}
        </table>
      </div>
    </div>
  </div>
);

const mapStateToProps = state => {
  return { invoices: getVisibleInvoices(state.invoices, state.filters) };
};

export default connect(mapStateToProps)(Invoices);
