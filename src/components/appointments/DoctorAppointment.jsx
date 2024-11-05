import React from 'react'

const DoctorAppointment = () => {
  return (
    <>
    <h2 className='mb-3'>Today's Appointments</h2>
    <table className="table mb-4">
      <thead>
        <tr>
          <th scope="col">Time</th>
          <th scope="col">Patient Name</th>
          <th scope="col">Reason</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>9.00 AM</td>
          <td>John Doe</td>
          <td>Annual Check-up</td>
        </tr>
        <tr>
          <td>10.00 AM</td>
          <td>Jane Smith</td>
          <td>Follow-up</td>
        </tr>
      </tbody>
    </table>

    </>
  );
}

export default DoctorAppointment