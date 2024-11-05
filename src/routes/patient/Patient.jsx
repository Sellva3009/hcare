import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PatientAppointment from "../../components/appointments/PatientAppointment";
import HealthReminder from "../../components/healthReminder/HealthReminder";
import HealthTip from "../../components/healthTip/HealthTip";
import Button from "../../components/button/Button";

const Patient = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || user.role !== "patient") {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="py-4 px-4">
      <div className="user-profile d-flex justify-content-between align-items-center">
        <h1 className="mb-4">Welcome John</h1>
        <div className="profile">
          <img src="../../../public/logo192.png" alt="user" style={{width: '30px', height: '30px'}} />
          <span>John Doe</span>
        </div>
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
