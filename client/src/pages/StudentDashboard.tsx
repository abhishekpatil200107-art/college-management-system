import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Course = {
  _id: string;
  title: string;
  category: string;
  duration: string;
  subjects: string;
  career: string;
  image: string;
};

type Faculty = {
  _id: string;
  name: string;
  department: string;
  qualification: string;
  experience: string;
  email: string;
  photoURL: string;
};

export default function StudentDashboard() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState<Course[]>([]);
  const [faculty, setFaculty] = useState<Faculty[]>([]);
  const student = JSON.parse(localStorage.getItem("student") || "{}");
  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState(student);

  useEffect(() => {
    const token = localStorage.getItem("studentToken");

    if (!token) {
      navigate("/student-login");
      return;
    }
    fetch("http://localhost:5000/api/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));

    fetch("http://localhost:5000/api/faculty")
      .then((res) => res.json())
      .then((data) => setFaculty(data));
  }, [navigate]);


  const updateProfile = async () => {
    const response = await fetch(
      `http://localhost:5000/api/students/${student.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profile),
      }
    );

    const updatedStudent = await response.json();

    localStorage.setItem(
      "student",
      JSON.stringify(updatedStudent)
    );

    setProfile(updatedStudent);

    alert("Profile Updated");
    setEditMode(false);

    window.location.reload();
  };
  return (

    <section className="section">
      <h2>Student Dashboard</h2>

      <h3>Welcome, {student.name}</h3>

      <p>Email: {student.email}</p>
      <p>Phone: {student.phone}</p>
      <p>Course: {student.course}</p>

      <button onClick={() => setEditMode(true)}>
        Edit Profile
      </button>

      {editMode && (
        <div>
          <input
            value={profile.name}
            onChange={(e) =>
              setProfile({ ...profile, name: e.target.value })
            }
          />

          <input
            value={profile.phone}
            onChange={(e) =>
              setProfile({ ...profile, phone: e.target.value })
            }
          />

          <input
            value={profile.course}
            onChange={(e) =>
              setProfile({ ...profile, course: e.target.value })
            }
          />

          <button onClick={updateProfile}>
            Save
          </button>

          <button
            type="button"
            onClick={() => setEditMode(false)}>
            Cancel
          </button>
        </div>
      )}



      <button
        onClick={() => {
          localStorage.removeItem("studentToken");
          localStorage.removeItem("student");
          navigate("/student-login");
        }}
      >
        Logout
      </button>
      <h3>Available Courses</h3>

      <div className="course-grid">
        {courses.map((course) => (
          <div className="course-card" key={course._id}>
            <img src={course.image} alt={course.title} width="100%" />
            <h4>{course.title}</h4>
            <p>{course.category}</p>
            <p><b>Duration:</b> {course.duration}</p>
            <p><b>Subjects:</b> {course.subjects}</p>
            <p><b>Career:</b> {course.career}</p>
          </div>
        ))}
      </div>

      <h3>Faculty Members</h3>

      <div className="faculty-grid">
        {faculty.map((item) => (
          <div className="faculty-card" key={item._id}>
            <img src={item.photoURL} alt={item.name} />
            <h4>{item.name}</h4>
            <p>{item.department}</p>
            <p>{item.qualification}</p>
            <p>{item.experience}</p>
          </div>
        ))}
      </div>
    </section>
  );
}