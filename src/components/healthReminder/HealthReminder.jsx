import React from 'react'

const HealthReminder = () => {
  return (
    <div className="bg-white p-5 mb-4">
      <h2 className='mb-3'>Health Reminder</h2>
      <div className="health-reminder-details">
        <ul>
          <li>Take medication A at 9:00 AM daily</li>
          <li>Schedule annual check-up</li>
        </ul>
      </div>
    </div>
  );
}

export default HealthReminder