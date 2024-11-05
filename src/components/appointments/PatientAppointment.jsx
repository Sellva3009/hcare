import React from 'react'

const PatientAppointment = () => {
  return (
    <div className="bg-white p-5 mb-4">
      <h2 className='mb-3'>Upcoming Appointments</h2>
      <div className="appointment-details">
        <p>Next appointment: Dr. Smith on June 15, 2023 at 10:00 AM</p>
        <p>Following: Dr. Johnson on June 22, 2023 at 2:00 PM</p>
      </div>
    </div>
  );
}

export default PatientAppointment