import React from 'react';
import { Link } from 'react-router-dom';

import InvestBooksLogo from '../../assets/images/InvestBooksLogo.png';

const Login = () => {
  return (
    <main className="main" id="top">
      <div className="container">
        <div className="row flex-center min-vh-100 py-6">
          <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
            <a className="d-flex flex-center mb-4" href="../index.html">
              <img
                className="mr-2"
                src={InvestBooksLogo}
                alt="InvestBooks"
                width="300"
              />
            </a>
            <div className="card">
              <div className="card-body p-5">
                <div className="row text-left justify-content-between">
                  <div className="col-auto">
                    <h5> Log in</h5>
                  </div>
                  <div className="col-auto">
                    <p className="fs--1 text-600">
                      or <Link to="/auth/register">Create an account</Link>
                    </p>
                  </div>
                </div>
                <form>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="row justify-content-between">
                    <div className="col-auto">
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          id="customCheckRemember"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheckRemember"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <div className="col-auto">
                      <a
                        className="fs--1"
                        href="../authentication/forget-password.html"
                      >
                        Forget Password?
                      </a>
                    </div>
                  </div>
                  <div className="form-group">
                    <button
                      className="btn btn-primary btn-block mt-3"
                      type="submit"
                      name="submit"
                    >
                      Log in
                    </button>
                  </div>
                  <div className="w-100 position-relative text-center mt-4">
                    <hr className="text-300" />
                    <div className="position-absolute absolute-centered t-0 px-3 bg-white text-sans-serif fs--1 text-500 text-nowrap">
                      or sign-in with
                    </div>
                  </div>
                  <div className="form-group mb-0">
                    <div className="row no-gutters">
                      <div className="col-sm-6 pr-sm-1">
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
                      <div className="col-sm-6 pl-sm-1">
                        <Link
                          className="btn btn-outline-facebook btn-sm btn-block mt-2"
                          to="#"
                        >
                          <span
                            className="fab fa-facebook mr-2"
                            data-fa-transform="grow-8"
                          ></span>{' '}
                          facebook
                        </Link>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
