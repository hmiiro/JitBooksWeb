import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../views/main/Home';
import Customers from '../views/sales/customers/Customers';
import ErrorPageNotFound from '../views/main/PageNotFound';
import TopBar from '../components/TopBar';
import Dashboard from '../views/main/Dashboard';
import Register from '../views/auth/Register';
import Login from '../views/auth/Login';
import Invoices from '../views/sales/invoices/Invoices';
import CreateInvoice from '../views/sales/invoices/CreateInvoice';
import EditInvoice from '../views/sales/invoices/EditInvoice';

const AppRouter = () => (
  <BrowserRouter>
    <div className="container">
      <TopBar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/auth/register" component={Register} exact />
        <Route path="/auth/login" component={Login} exact />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/customers" component={Customers} exact />
        <Route path="/sales/invoices" component={Invoices} exact />
        <Route path="/sales/invoices/create" component={CreateInvoice} exact />
        <Route path="/sales/invoices/edit/:id" component={EditInvoice} exact />
        <Route component={ErrorPageNotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
