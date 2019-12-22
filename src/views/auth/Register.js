import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Label, FormGroup, Input } from 'reactstrap';

import InvestBooksLogo from '../../assets/images/InvestBooksLogo.png';

const Register = () => {
  return (
    <div>
      <main className="main" id="top">
        <div className="container">
          <div className="row flex-center min-vh-100 py-6">
            <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
              <Link to="/" className="d-flex flex-center mb-4">
                <img
                  className="mr-2"
                  src={InvestBooksLogo}
                  alt="InvestBooks"
                  width="300"
                />
              </Link>
              <div className="card">
                <div className="card-body p-12">
                  <div className="row text-left">
                    <div className="col" style={{ minWidth: 30 }}>
                      <h5 id="modalLabel"> Register</h5>
                    </div>
                    <div className="col-auto">
                      <p className="fs--1 text-600">
                        Have an account? <Link to="/auth/login">Login</Link>
                      </p>
                    </div>
                  </div>
                  <Form>
                    <FormGroup>
                      <Input
                        className="form-control"
                        type="text"
                        placeholder="Enter Full Name"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        className="form-control"
                        type="email"
                        placeholder="Enter Valid Email address"
                      />
                    </FormGroup>
                    <div className="form-row">
                      <FormGroup className="col-5">
                        <Input
                          className="form-control"
                          type="password"
                          placeholder="Password"
                        />
                      </FormGroup>

                      <FormGroup className="col-7">
                        <Input
                          className="form-control col"
                          type="password"
                          placeholder="Confirm Password"
                        />
                      </FormGroup>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <Input
                        className="custom-control-Input"
                        id="customCheckTerms"
                        type="checkbox"
                      />
                      <Label
                        className="custom-control-Label"
                        htmlFor="customCheckTerms"
                      >
                        I accept the <a href="#!">terms </a>and{' '}
                        <a href="#!">privacy policy</a>
                      </Label>
                    </div>
                    <div className="FormGroup">
                      <button
                        className="btn btn-primary btn-block mt-3"
                        type="submit"
                        name="submit"
                      >
                        Register
                      </button>
                    </div>
                    <div className="w-100 position-relative text-center mt-4">
                      <hr className="text-300" />
                      <div className="position-absolute absolute-centered t-0 px-3 bg-white text-sans-serif fs--1 text-500 text-nowrap">
                        or sign-up with
                      </div>
                    </div>
                    <div className="FormGroup mb-0">
                      <div className="row no-gutters">
                        <div className="col-sm-12 pr-sm-1">
                          <Link
                            className="btn btn-outline-google-plus btn-sm btn-block mt-2"
                            to="#"
                          >
                            <span
                              className="fab fa-google-plus-g mr-2"
                              data-fa-transform="grow-8"
                            ></span>{' '}
                            google
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
