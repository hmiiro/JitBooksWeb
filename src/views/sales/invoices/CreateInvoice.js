import React from 'react';
import { connect } from 'react-redux';

import InvoiceForm from './InvoiceForm';
import { createInvoice } from '../../../redux/actions/invoices/index';

const CreateInvoice = props => {
  return (
    <div>
      <h3>Add New Invoice:</h3>
      <InvoiceForm
        onSubmit={invoice => {
          props.dispatch(createInvoice(invoice));
          props.history.push('/sales/invoices');
        }}
      />
    </div>
  );
};

export default connect()(CreateInvoice);
