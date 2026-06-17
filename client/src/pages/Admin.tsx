import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Admission = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  course: string;
  message: string;
};

export default function Admin() {
  const navigate = useNavigate();
  const [admissions, setAdmissions] = useState<Admission[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    fetch("http://localhost:5000/api/admissions")
      .then((res) => res.json())
      .then((data) => setAdmissions(data))
      .catch((err) => console.log(err));
  }, [navigate]);

  const deleteAdmission = async (id: string) => {
    const response = await fetch(`http://localhost:5000/api/admissions/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      setAdmissions(admissions.filter((item) => item._id !== id));
      alert("Application deleted");
    } else {
      alert("Delete failed");
    }
  };

  const [search, setSearch] = useState("");
  const filteredAdmissions = admissions.filter((item) => {
    const fullName = `${item.firstName} ${item.lastName}`.toLowerCase();

    return (
      fullName.includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase()) ||
      item.phone.includes(search) ||
      item.course.toLowerCase().includes(search.toLowerCase())
    );
  });

  const [editData, setEditData] = useState<Admission | null>(null);
  const updateAdmission = async () => {
    if (!editData) return;

    const response = await fetch(
      `http://localhost:5000/api/admissions/${editData._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editData),
      }
    );

    if (response.ok) {
      const updated = await response.json();

      setAdmissions(
        admissions.map((item) =>
          item._id === updated._id ? updated : item
        )
      );

      setEditData(null);
      alert("Application updated");
    } else {
      alert("Update failed");
    }
  };


  return (
    <section className="section">
      <h2>Admin Dashboard</h2>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/login");
        }}
      >
        Logout
      </button>
      <p>Total Applications: {filteredAdmissions.length}</p>
      <input
        type="text"
        placeholder="Search by name, email, phone, or course"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          margin: "15px 0",
        }}
      />
      {editData && (
        <form>
          <h3>Edit Application</h3>

          <input
            value={editData.firstName}
            onChange={(e) =>
              setEditData({ ...editData, firstName: e.target.value })
            }
          />

          <input
            value={editData.lastName}
            onChange={(e) =>
              setEditData({ ...editData, lastName: e.target.value })
            }
          />

          <input
            value={editData.email}
            onChange={(e) =>
              setEditData({ ...editData, email: e.target.value })
            }
          />

          <input
            value={editData.phone}
            onChange={(e) =>
              setEditData({ ...editData, phone: e.target.value })
            }
          />

          <input
            value={editData.course}
            onChange={(e) =>
              setEditData({ ...editData, course: e.target.value })
            }
          />

          <textarea
            value={editData.message}
            onChange={(e) =>
              setEditData({ ...editData, message: e.target.value })
            }
          />

          <button type="button" onClick={updateAdmission}>
            Update
          </button>

          <button type="button" onClick={() => setEditData(null)}>
            Cancel
          </button>
        </form>
      )}

      <table border={1} cellPadding={10} width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Course</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredAdmissions.map((item) => (
            <tr key={item._id}>
              <td>{item.firstName} {item.lastName}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.course}</td>
              <td>{item.message}</td>
              <td>
                <button onClick={() => setEditData(item)}>
                  Edit
                </button>

                <button onClick={() => deleteAdmission(item._id)}>
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