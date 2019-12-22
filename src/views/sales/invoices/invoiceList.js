import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { deleteInvoice } from '../../../redux/actions/invoices';

const InvoiceList = ({
  dispatch,
  customer,
  totAmount,
  totBal,
  invoiceDate,
  id,
  status
}) => (
  <tbody className="list">
    <tr>
      <td className="orders-order">
        {moment(invoiceDate).format('DD/MM/YYYY')}
      </td>
      <td className="orders-order">
        <Link to={`/sales/invoices/edit/${id}`}>{id}</Link>
      </td>
      <td className="orders-product">{customer}</td>
      <td className="orders-total">{totAmount}</td>
      <td className="orders-total">{totBal}</td>
      <td className="orders-total">{status}</td>
      <td className="orders-total">
        <Button
          onClick={() => {
            dispatch(deleteInvoice({ id }));
          }}
        >
          Action
        </Button>
      </td>
    </tr>
  </tbody>
);

export default connect()(InvoiceList);
