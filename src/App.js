import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./routes/homePage/homePage";
import './App.css';
import Login from "./routes/login/Login";
import Register from "./routes/register/Register";
import BookAppointment from "./routes/bookAppointment/BookAppointment";
import DashboardLayout from "./routes/layout/DashboardLayout";
import Provider from "./routes/provider/Provider";
import Patient from "./routes/patient/Patient";
import Logout from "./components/logout/Logout";
import PrivateRoute from "./routes/privateRoute/PrivateRoute";
import PatientLists from "./routes/patientLists/PatientLists";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/book-an-appointment" element={<BookAppointment />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route
            path="provider"
            element={
              <PrivateRoute allowedRole="doctor">
                <Provider />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="patient"
            element={
              <PrivateRoute allowedRole="patient">
                <Patient />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/dashboard/patient-list"
            element={
              <PrivateRoute allowedRole="doctor">
                <PatientLists />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
