import React from 'react'

const BookAppointment = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="form-wrap bg-white p-4 rounded shadow">
        <h3 className="text-center mb-5 fw-bold">Book an Appointment</h3>
        <form className="row">
            <div className="col-12 col-md-6 mb-3">
                <div className="form-group mb-4">
                <label htmlFor="selectDoctor" className="mb-2 fw-bold">
                    Select Doctor
                </label>
                <select
                    className="form-select"
                    id="selectDoctor"
                    aria-label="Default select example"
                >
                    <option selected>Choose a doctor</option>
                    <option value="dr-smith">
                    Dr. Smith - General Practitioner
                    </option>
                    <option value="dr-johnson">Dr. Johnson - Cardiologist</option>
                    <option value="dr-williams">Dr. Williams - Pediatrician</option>
                </select>
                </div>
                <div className="form-group mb-4">
                <label htmlFor="selectDate" className="mb-2 d-table fw-bold">
                    Select Date
                </label>
                <input type="date" id="selectDate" className="form-control" />
                </div>
            </div>
            <div className="col-12 col-md-6 mb-3">
                <div className="form-group mb-4">
                <label htmlFor="selectDoctor" className="mb-2 d-table fw-bold">
                    Available Time Slots
                </label>
                <div className="time-slots d-flex flex-wrap column-gap-5 row-gap-3">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" for="flexRadioDefault1">
                            9.00 AM
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label className="form-check-label" for="flexRadioDefault2">
                            10:00 AM
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                        <label className="form-check-label" for="flexRadioDefault3">
                            11:00 AM
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                        <label className="form-check-label" for="flexRadioDefault4">
                            1:00 PM
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5" />
                        <label className="form-check-label" for="flexRadioDefault5">
                            2:00 PM
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault6" />
                        <label className="form-check-label" for="flexRadioDefault6">
                            3:00 PM
                        </label>
                    </div>
                </div>
                </div>
                <div className="form-group mb-4">
                <label htmlFor="selectDoctor" className="mb-2 d-table fw-bold">
                    Reason for Visit
                </label>
                <textarea
                    id="reason"
                    rows="3"
                    className="form-control"
                ></textarea>
                </div>
                <div className="form-group mb-4">
                <label htmlFor="selectDoctor" className="mb-2 d-table fw-bold">
                    Additional Notes (Optional)
                </label>
                <textarea id="notes" rows="2" className="form-control"></textarea>
                </div>
            </div>
          <button type="submit" className="btn btn-success w-100">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookAppointment