import { useEffect, useState } from "react";

type Course = {
  _id: string;
  title: string;
  category: string;
  duration: string;
  subjects: string;
  career: string;
  image: string;
};

export default function Courses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [form, setForm] = useState({
    title: "",
    category: "",
    duration: "",
    subjects: "",
    career: "",
    image: "",
  });

  const fetchCourses = () => {
    fetch("http://localhost:5000/api/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const addCourse = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("Course added");
      setForm({
        title: "",
        category: "",
        duration: "",
        subjects: "",
        career: "",
        image: "",
      });
      fetchCourses();
    }
  };

  const deleteCourse = async (id: string) => {
    await fetch(`http://localhost:5000/api/courses/${id}`, {
      method: "DELETE",
    });

    fetchCourses();
  };

  return (
    <section className="section">
      <h2>Course Management</h2>

      <form onSubmit={addCourse}>
        <input
          placeholder="Course Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <input
          placeholder="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />

        <input
          placeholder="Duration"
          value={form.duration}
          onChange={(e) => setForm({ ...form, duration: e.target.value })}
        />

        <input
          placeholder="Subjects"
          value={form.subjects}
          onChange={(e) => setForm({ ...form, subjects: e.target.value })}
        />

        <input
          placeholder="Career"
          value={form.career}
          onChange={(e) => setForm({ ...form, career: e.target.value })}
        />

        <input
          placeholder="Image URL"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />

        <button type="submit">Add Course</button>
      </form>

      <table border={1} cellPadding={10} width="100%">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Category</th>
            <th>Duration</th>
            <th>Subjects</th>
            <th>Career</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {courses.map((course) => (
            <tr key={course._id}>
              <td>
                <img src={course.image} width="80" />
              </td>
              <td>{course.title}</td>
              <td>{course.category}</td>
              <td>{course.duration}</td>
              <td>{course.subjects}</td>
              <td>{course.career}</td>
              <td>
                <button onClick={() => deleteCourse(course._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}