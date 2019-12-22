import uuid from 'uuid';

export const createInvoice = ({
  customer = '',
  invoiceDate = '',
  lineItems = [
    {
      id: '',
      name: '',
      quantity: 0,
      price: 0,
      taxRate: 0
    }
  ],
  totItems = 0,
  totBTax = 0,
  totTax = 0,
  totAmount = 0,
  totBal = 0,
  createdAt = 0
} = {}) => ({
  type: 'CREATE_INVOICE',
  invoice: {
    id: uuid(),
    invoiceDate,
    customer,
    lineItems,
    totItems,
    totBTax,
    totTax,
    totAmount,
    totBal,
    status: 'CREATED',
    createdAt
  }
});

export const deleteInvoice = ({ id } = {}) => ({
  type: 'DELETE_INVOICE',
  id
});

export const editInvoice = (id, updates) => ({
  type: 'EDIT_INVOICE',
  id,
  updates
});
