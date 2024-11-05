import React from 'react'
import { Link } from 'react-router-dom';
import { navLists } from "../../lib/dummyData";

const Navigation = () => {
  return (
    <nav class="navbar navbar-expand-sm bg-body-tertiary">
      <div class="container-fluid">
        <Link class="navbar-brand d-sm-none" to="#">
          Menu
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-sm-flex justify-content-center" id="navbarNav">
          <ul class="navbar-nav">
            {navLists.map((navList) => (
              <li class="nav-item">
                <Link
                  class="nav-link active"
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