import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: "", // required
    password: "", // required
  });
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    // fetch("http://localhost:3000/login", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data.user));
    // console.log('submitted')
    try {
      const response = await axios.get("http://localhost:3000/users", {
        params: {
          email: formData.email,
          password: formData.password
        }
      });
      const user = response.data[0];
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        if (user.role === "doctor") {
          navigate('/dashboard/provider');
        } else {
          navigate('/dashboard/patient');
        }
      } else {
        alert('Invalid Credentials');
      }
    } catch (err) {
      console.error('Error logging in', err);
    }
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="form-wrap w-25 bg-white p-4 rounded shadow">
        <h3 className="text-center mb-3 fw-bold">Login</h3>
        <form onSubmit={(e) => handleLogin(e)}>
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
          <button type="submit" className="btn btn-success w-100">
            Login
          </button>
        </form>
        <Link className="mx-auto d-table my-2" to="/forget-password">
          Forgot Password?
        </Link>
        <p className="mx-auto d-table my-2 text-center">
          New User? <br />
          <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login