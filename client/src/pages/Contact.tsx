export function Contact() {
  return (
    <main className="page">
      <h1>Contact Us</h1>

      <form className="form">
        <input placeholder="Your Name" />
        <input placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button>Send Message</button>
      </form>
    </main>
  );
}