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
  const [activeTab, setActiveTab] = useState("dashboard");
  const [courses, setCourses] = useState<Course[]>([]);
  const [faculty, setFaculty] = useState<Faculty[]>([]);
  const student = JSON.parse(localStorage.getItem("student") || "{}");
  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState(student);

  type Announcement = {
    _id: string;
    title: string;
    message: string;
  };

  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
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

    fetch("http://localhost:5000/api/announcements")
      .then((res) => res.json())
      .then((data) => setAnnouncements(data));
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
    <div className="student-layout">
      <aside className="student-sidebar">
        <h2>Student Portal</h2>

        <button onClick={() => setActiveTab("dashboard")}>Dashboard</button>
        <button onClick={() => setActiveTab("courses")}>Courses</button>
        <button onClick={() => setActiveTab("faculty")}>Faculty</button>
        <button onClick={() => setActiveTab("profile")}>Profile</button>

        <button
          onClick={() => {
            localStorage.removeItem("studentToken");
            localStorage.removeItem("student");
            navigate("/student-login");
          }}
        >
          Logout
        </button>
      </aside>

      <main className="student-content">
        {activeTab === "dashboard" && (
          <>
            <h2>Welcome, {student.name}</h2>

            <div className="dashboard-cards">
              <div className="dashboard-card">
                <h3>{courses.length}</h3>
                <p>Total Courses</p>
              </div>

              <div className="dashboard-card">
                <h3>{faculty.length}</h3>
                <p>Total Faculty</p>
              </div>

              <div className="dashboard-card">
                <h3>{student.course}</h3>
                <p>My Course</p>
              </div>

              <div className="dashboard-card">
                <h3>{student.name}</h3>
                <p>Student Name</p>
              </div>

              <h3>Latest Announcements</h3>

              <div className="announcement-box">
                {announcements.map((item) => (
                  <p key={item._id}>
                    📢 <b>{item.title}</b> - {item.message}
                  </p>
                ))}
              </div>
            </div>
          </>
        )}



        {activeTab === "courses" && (
          <>
            <h2>Available Courses</h2>

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
          </>
        )}

        {activeTab === "faculty" && (
          <>
            <h2>Faculty Members</h2>

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
          </>
        )}

        {activeTab === "profile" && (
          <>
            <h2>My Profile</h2>

            <p>Email: {student.email}</p>
            <p>Phone: {student.phone}</p>
            <p>Course: {student.course}</p>

            <button onClick={() => setEditMode(true)}>Edit Profile</button>

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

                <button onClick={updateProfile}>Save</button>
                <button type="button" onClick={() => setEditMode(false)}>
                  Cancel
                </button>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}