import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'patient'
  });

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    // fetch("http://localhost:3000/users", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
    try {
      await axios.post("http://localhost:3000/users", formData);
      alert('Registration successful! Please log in.');
      navigate("/login");
    } catch (err) {
      console.error('Error registered user', err);
    }
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="form-wrap w-25 bg-white p-4 rounded shadow">
        <h3 className="text-center mb-3 fw-bold">Register</h3>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="row mb-3">
            <div>
              <input
                type="email"
                className="form-control"
                id="inputEmail3"
                placeholder="Email"
                value={formData.email}
                name="email"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div>
              <input
                type="password"
                className="form-control"
                id="inputPassword3"
                placeholder="password"
                value={formData.password}
                name="password"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div>
              <select
                class="form-select"
                aria-label="selecting role"
                name="role"
                onChange={(e) => handleChange(e)}
              >
                <option selected>Open this select menu</option>
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
              </select>
            </div>
          </div>
          <button type="submit" className="btn btn-success w-100">
            Register
          </button>
        </form>
        <p className="mx-auto d-table my-2 text-center">
          Already have a account? <br />
          <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
}

export default Register