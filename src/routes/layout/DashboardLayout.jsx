import React from 'react'
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const DashboardLayout = () => {
  const navigate = useNavigate();
  let location = useLocation();
  console.log(location);
  const handleLogout =() => {
    navigate('/logout');
  }
  return (
    <div className="row">
      <div className="col-md-2 bg-primary py-4 px-4 sidebar vh-100">
        <h5 className="text-white fw-bold">
          <Link className="text-white text-decoration-none" to="/">
            Bayer Health
          </Link>
        </h5>
        <nav>
          <ul className="p-0 m-0 list-style-none">
            <li>
              <Link
                className="text-white text-decoration-none mb-2 d-table"
                // to={`${location.pathname.split("/").slice(2,3)}`}
                to="provider"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                className="text-white text-decoration-none mb-2 d-table"
                // to={`${location.pathname.split("/").slice(2,3)}/${location.pathname
                //   .split("/")
                //   .pop()}`}
                to="patient-list"
              >
                Patient List
              </Link>
            </li>
            <li>
              <Link
                className="text-white text-decoration-none mb-2 d-table"
                to="/appointments"
              >
                Appointments
              </Link>
            </li>
            <li>
              <Link
                className="text-white text-decoration-none mb-2 d-table"
                to="/messages"
              >
                Messages
              </Link>
            </li>
            <li>
              {/* <Link
                className="text-white text-decoration-none mb-2 d-table"
                to="/logout"
              >
                Logout
              </Link> */}
              <button type="button" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="col-md-10">
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout