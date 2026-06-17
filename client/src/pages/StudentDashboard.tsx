import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function StudentDashboard() {
  const navigate = useNavigate();

  const student = JSON.parse(
    localStorage.getItem("student") || "{}"
  );

  useEffect(() => {
    const token = localStorage.getItem("studentToken");

    if (!token) {
      navigate("/student-login");
    }
  }, [navigate]);

  return (
    <section className="section">
      <h2>Student Dashboard</h2>

      <h3>Welcome, {student.name}</h3>

      <p>Email: {student.email}</p>
      <p>Phone: {student.phone}</p>
      <p>Course: {student.course}</p>

      <button
        onClick={() => {
          localStorage.removeItem("studentToken");
          localStorage.removeItem("student");
          navigate("/student-login");
        }}
      >
        Logout
      </button>
    </section>
  );
}