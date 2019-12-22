import React from 'react';
import { connect } from 'react-redux';

import InvoiceForm from './InvoiceForm';
import { editInvoice } from '../../../redux/actions/invoices/index';

const EditInvoice = props => {
  return (
    <div>
      <InvoiceForm
        invoice={props.invoice}
        onSubmit={invoice => {
          props.dispatch(editInvoice(props.invoice.id, invoice));
          props.history.push('/sales/invoices');
        }}
      />
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    invoice: state.invoices.find(
      invoice => invoice.id === props.match.params.id
    )
  };
};

export default connect(mapStateToProps)(EditInvoice);
