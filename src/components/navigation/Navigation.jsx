import React from 'react'
import { Link } from 'react-router-dom';
import { navLists } from "../../lib/dummyData";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand d-sm-none" to="#">
          Menu
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-sm-flex justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {navLists.map((navList) => (
              <li className="nav-item" key={navList.id}>
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={navList.link}
                >
                  {navList.page}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation