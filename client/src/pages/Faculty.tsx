import { useEffect, useState } from "react";

type Faculty = {
  _id: string;
  name: string;
  department: string;
  qualification: string;
  experience: string;
  email: string;
  photoURL: string;
};

export default function Faculty() {
  const [faculty, setFaculty] = useState<Faculty[]>([]);
  const [form, setForm] = useState({
    name: "",
    department: "",
    qualification: "",
    experience: "",
    email: "",
    photoURL: "",
  });

  const fetchFaculty = () => {
    fetch("http://localhost:5000/api/faculty")
      .then((res) => res.json())
      .then((data) => setFaculty(data));
  };

  useEffect(() => {
    fetchFaculty();
  }, []);

  const addFaculty = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/faculty", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("faculty added");
      setForm({
        name: "",
        department: "",
        qualification: "",
        experience: "",
        email: "",
        photoURL: "",
      });
      fetchFaculty();
    }
  };

  const deleteFaculty = async (id: string) => {
    await fetch(`http://localhost:5000/api/faculty/${id}`, {
      method: "DELETE",
    });

    fetchFaculty();
  };

  return (
    <section className="section">
      <h2>Faculty Management</h2>

      <form onSubmit={addFaculty}>
        <input
          placeholder="Faculty Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Department"
          value={form.department}
          onChange={(e) => setForm({ ...form,department: e.target.value })}
        />

        <input
          placeholder="Qualification"
          value={form.qualification}
          onChange={(e) => setForm({ ...form, qualification: e.target.value })}
        />

        <input
          placeholder="Experience"
          value={form.experience}
          onChange={(e) => setForm({ ...form, experience: e.target.value })}
        />

        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          placeholder="PhotoURL"
          value={form.photoURL}
          onChange={(e) => setForm({ ...form, photoURL: e.target.value })}
        />

        <button type="submit">Add Faculty</button>
      </form>

      <table border={1} cellPadding={10} width="100%">
        <thead>
          <tr>
            <th>photoURL</th>
            <th>name</th>
            <th>Department</th>
            <th>Qualification</th>
            <th>Experience</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {faculty.map((faculty) => (
            <tr key={faculty._id}>
              <td>
                <img src={faculty.photoURL} width="80" />
              </td>
              <td>{faculty.name}</td>
              <td>{faculty.department}</td>
              <td>{faculty.qualification}</td>
              <td>{faculty.experience}</td>
              <td>{faculty.email}</td>
              <td>
                <button onClick={() => deleteFaculty(faculty._id)}>
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