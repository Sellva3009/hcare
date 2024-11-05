import React from 'react'
import Button from '../button/Button';

const RecentPatient = () => {
  return (
    <>
      <h2 className="mb-3">Recent Patients</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Last Visit</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alice Johnson</td>
            <td>2023-06-01</td>
            <td>
              <Button href="/patient-profile" linkText="View Profile" />
            </td>
          </tr>
          <tr>
            <td>Bob Williams</td>
            <td>2023-05-28</td>
            <td>
              <Button href="/patient-profile" linkText="View Profile" />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default RecentPatient