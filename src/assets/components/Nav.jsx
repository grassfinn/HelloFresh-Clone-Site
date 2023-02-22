import React from 'react';

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand d-flex" href="#">
          <img src="./favicon.ico" className="logo" alt="" />
          <span>BonjourVegi</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#">
                Our Plans
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                How It Works
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Our Menu
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Our Menu
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Cookbook
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Gift Cards
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sustainability
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Sustainability
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Our Sustainability Team
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Recycling and Packaging
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Cut Back on Food Waste
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Social Impact
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Reduce your Carbon Footprint
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Suppliers
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <button className="btn btn-success login">Log in</button>
        </div>
      </div>
    </nav>
  );
}
