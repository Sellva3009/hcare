import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    username: "",
    email: "",
    role: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Fetch user data from localStorage or backend
    const userId = JSON.parse(localStorage.getItem("user")).id;
    axios.get(`http://localhost:3000/users/${userId}`).then((response) => {
      setProfileData(response.data);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleSave = () => {
    const userId = JSON.parse(localStorage.getItem("user")).id;
    axios
      .put(`http://localhost:3000/users/${userId}`, profileData)
      .then((response) => {
        setProfileData(response.data);
        setIsEditing(false);
        alert("Profile updated successfully!");
      })
      .catch((error) => {
        console.error("Error updating profile", error);
        alert("Error updating profile.");
      });
  };

  return (
    // <div>
    //   <h2>Profile Page</h2>
    //   <div>
    //     <label>Username:</label>
    //     <input
    //       type="text"
    //       name="username"
    //       value={profileData.username}
    //       onChange={handleChange}
    //       disabled={!isEditing}
    //     />
    //   </div>
    //   <div>
    //     <label>Email:</label>
    //     <input
    //       type="email"
    //       name="email"
    //       value={profileData.email}
    //       onChange={handleChange}
    //       disabled={!isEditing}
    //     />
    //   </div>
    //   <div>
    //     <label>Role:</label>
    //     <input type="text" name="role" value={profileData.role} disabled />
    //   </div>
    //   {isEditing ? (
    //     <button onClick={handleSave}>Save</button>
    //   ) : (
    //     <button onClick={() => setIsEditing(true)}>Edit Profile</button>
    //   )}
    // </div>

    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="form-wrap w-25 bg-white p-4 rounded shadow">
        <h3 className="text-center mb-3 fw-bold">Profile page</h3>
        <div className="row mb-3">
          <div>
            <label for="username">User: </label>
            <br />
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Username"
              value={profileData.username}
              name="username"
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div>
            <label for="Email:">Email: </label>
            <br />
            <input
              type="email"
              className="form-control"
              id="inputEmail3"
              placeholder="Email"
              value={profileData.email}
              name="email"
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div>
            <label for="role">Role: </label>
            <br />
            {/* <input
              className="form-control"
              type="text"
              name="role"
              id="role"
              value={profileData.role}
              disabled={!isEditing}
            /> */}
            <select
              className="form-select"
              aria-label="selecting role"
              name="role"
              onChange={handleChange}
              id="role"
              disabled={!isEditing}
            >
              <option selected>Open this select menu</option>
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>
        </div>
        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit Profile</button>
        )}
      </div>
    </div>
  );
};

export default Profile;
