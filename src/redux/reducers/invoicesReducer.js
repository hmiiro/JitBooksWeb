const invoiceReducerDefaultState = [];

const invoicesReducer = (state = invoiceReducerDefaultState, action) => {
  switch (action.type) {
    case 'CREATE_INVOICE':
      return [...state, action.invoice];
    case 'DELETE_INVOICE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_INVOICE':
      return state.map(invoice => {
        if (invoice.id === action.id) {
          return {
            ...invoice,
            ...action.updates
          };
        } else {
          return invoice;
        }
      });
    default:
      return state;
  }
};

export default invoicesReducer;
