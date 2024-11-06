import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import PatientAppointment from "../../components/appointments/PatientAppointment";
import HealthReminder from "../../components/healthReminder/HealthReminder";
import HealthTip from "../../components/healthTip/HealthTip";
import Button from "../../components/button/Button";
import logo from '../../logo.svg'

const Patient = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || user.role !== "patient") {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="py-4 px-4">
      <div className="user-profile d-flex justify-content-between align-items-center">
        <h1 className="mb-4">Welcome {user.username}</h1>
        <Link
          to="profile"
          className="profile d-flex justify-content-between align-items-center gap-2 text-decoration-none" 
        >
          <img
            src={logo}
            alt="user"
            style={{ width: "35px", height: "35px" }}
            className="border rounded-circle"
          />
          <span>{user.username}</span>
        </Link>
      </div>
      <PatientAppointment />
      <HealthReminder />
      <HealthTip />
      <div className="button-nav d-flex justify-content-between my-4">
        <Button linkText="Book Appointment" href="book-appointment" />
        <Button linkText="View Health Records" href="health-records" />
        <Button linkText="Message Provider" href="message-provider" />
      </div>
    </div>
  );
};

export default Patient;
