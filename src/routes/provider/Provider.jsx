import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DoctorAppointment from "../../components/appointments/DoctorAppointment";
import RecentPatient from "../../components/recentPatient/RecentPatient";

const Provider = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || user.role !== "doctor") {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="py-4 px-4">
      <h1 className="mb-4">Welcome, Dr. Smith</h1>
      <DoctorAppointment />
      <RecentPatient />
    </div>
  );
};

export default Provider;
