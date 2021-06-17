import React from 'react';

function Navbar() {
  return (
    <>
      <div className="home" id="home">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="navbar navbar-expand-xl navbar-light bg-light">
                <a href="https" className="navbar-brand">
                  <i className="fas fa-chart-line fa-3x nav-icon" />
                  <h1 className="main-title mb-0">Dashboard</h1>
                </a>
                <button
                  className="navbar-toggler ml-auto mr-0"
                  type="button"
                  data-toggle="collapse"
                  data-target="httpsmyNav"
                  aria-controls="myNav"
                  aria-expanded="false"
                  aria-label="toggle navigation"
                >
                  <span className="bars">
                    <i className="fas fa-bars" />
                  </span>
                </button>
                <div className="collapse navbar-collapse" id="myNav">
                  <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                      <a href="https" className="nav-link active">
                        Dashboard
                      </a>
                      <span className="sr-only">(current)</span>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        href="https"
                        className="nav-link dropdown-toggle"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Reports
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <a href="https" className="dropdown-item">
                          Daily Report
                        </a>
                        <a href="https" className="dropdown-item">
                          Weekly Report
                        </a>
                        <a href="https" className="dropdown-item">
                          Yearly Report
                        </a>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a href="https" className="nav-link">
                        Products
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="https" className="nav-link">
                        Accounts
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        href="https"
                        className="nav-link dropdown-toggle"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Settings
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <a href="https" className="dropdown-item">
                          Profile
                        </a>
                        <a href="https" className="dropdown-item">
                          Billing
                        </a>
                        <a href="https" className="dropdown-item">
                          Customize
                        </a>
                      </div>
                    </li>
                  </ul>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a href="https" className="nav-link d-flex">
                        <i className="far fa-user mr-2 logout-icon" />
                        <span> Logout</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
