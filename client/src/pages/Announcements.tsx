import { useEffect, useState } from "react";

type Announcement = {
  _id: string;
  title: string;
  message: string;
};

export default function Announcements() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [form, setForm] = useState({
    title: "",
    message: "",
  });

  const fetchAnnouncements = () => {
    fetch("http://localhost:5000/api/announcements")
      .then((res) => res.json())
      .then((data) => setAnnouncements(data));
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const addAnnouncement = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/announcements", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("Announcement added");
      setForm({ title: "", message: "" });
      fetchAnnouncements();
    }
  };

  const deleteAnnouncement = async (id: string) => {
    await fetch(`http://localhost:5000/api/announcements/${id}`, {
      method: "DELETE",
    });

    fetchAnnouncements();
  };

  return (
    <section className="section">
      <h2>Announcement Management</h2>

      <form onSubmit={addAnnouncement}>
        <input
          placeholder="Announcement Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <textarea
          placeholder="Announcement Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />

        <button type="submit">Add Announcement</button>
      </form>

      <table border={1} cellPadding={10} width="100%">
        <thead>
          <tr>
            <th>Title</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {announcements.map((item) => (
            <tr key={item._id}>
              <td>{item.title}</td>
              <td>{item.message}</td>
              <td>
                <button onClick={() => deleteAnnouncement(item._id)}>
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