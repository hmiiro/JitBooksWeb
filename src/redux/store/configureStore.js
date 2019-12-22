import { createStore, combineReducers } from 'redux';
import invoicesReducer from '../reducers/invoicesReducer';
import filtersReducer from '../reducers/filtersReducer';

export default () => {
  const store = createStore(
    combineReducers({
      invoices: invoicesReducer,
      filters: filtersReducer
    })
  );
  return store;
};
