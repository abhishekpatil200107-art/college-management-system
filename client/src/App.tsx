import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Courses from "./pages/Courses";
import Faculty from "./pages/Faculty";
import StudentRegister from "./pages/StudentRegister";
import StudentLogin from "./pages/StudentLogin";
import StudentDashboard from "./pages/StudentDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/courses-admin" element={<Courses />} />
      <Route path="/faculty-admin" element={<Faculty />} />
      <Route path="/student-register" element={<StudentRegister />} />
      <Route path="/student-login" element={<StudentLogin />} />
      <Route path="/student-Dashboard" element={<StudentDashboard />} />

    </Routes>
  );
}

export default App;