import React, { useState } from 'react';
import { Link, NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import InvestBooksLogo from '../assets/images/InvestBooksLogo.png';

const TopBar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={Link} to="/">
          <img
            src={InvestBooksLogo}
            height="80"
            className="d-inline-block align-top"
            alt="brand"
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink
                activeClassName="selected"
                tag={RRNavLink}
                to="/"
                exact={true}
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                activeClassName="selected"
                tag={RRNavLink}
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink activeClassName="selected" tag={RRNavLink} to="/members">
                Members
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                activeClassName="selected"
                tag={RRNavLink}
                to="/sales/invoices"
              >
                Invoices
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default TopBar;
