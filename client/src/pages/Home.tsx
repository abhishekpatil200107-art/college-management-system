
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
function Home() {
  
  const handleAdmissionSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const data = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    course: formData.get("course"),
    message: formData.get("message"),
  };

  const response = await fetch("http://localhost:5000/api/admissions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    alert("Admission enquiry submitted successfully");
    e.currentTarget.reset();
  } else {
    alert("Something went wrong");
  }
};

  return (
    <>
      <SiteHeader />

      <section id="home" className="hero">
        <div className="hero-content">
          <span className="badge">Admissions Open 2026</span>
          <h1>Meridian Institute of Technology</h1>
          <p>
            A modern institute for engineering, innovation, research, campus life,
            and industry-ready career development.
          </p>

          <div className="hero-buttons">
            <a href="#admissions" className="btn primary">
              Apply Now
            </a>
            <a href="#courses" className="btn secondary">
              View Courses
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="section about">
        <div>
          <span className="small-title">About Us</span>
          <h2>Shaping Future Engineers and Innovators</h2>
          <p>
            Meridian Institute of Technology provides quality education with
            modern classrooms, advanced laboratories, experienced faculty,
            research opportunities, student clubs, and excellent placement
            support.
          </p>

          <div className="stats">
            <div>
              <h3>25+</h3>
              <p>Years</p>
            </div>
            <div>
              <h3>5000+</h3>
              <p>Students</p>
            </div>
            <div>
              <h3>120+</h3>
              <p>Faculty</p>
            </div>
            <div>
              <h3>95%</h3>
              <p>Placement</p>
            </div>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=80"
          alt="College campus"
        />
      </section>

      <section id="courses" className="section">
        <span className="small-title">Academic Programs</span>
        <h2>Professional Courses</h2>
        <p className="section-text">
          Choose from future-ready engineering programs with practical labs,
          internships, projects, technical workshops, and placement training.
        </p>

        <div className="course-grid">
          <div className="course-card">
            <div className="course-img">
              <img
                src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80"
                alt="Computer Engineering"
              />
            </div>
            <div className="course-content">
              <span className="course-tag">Technology</span>
              <h3>Computer Engineering</h3>
              <p>
                <b>Duration:</b> 4 Years
              </p>
              <p>
                <b>Subjects:</b> Java, Python, DBMS, AI, Cloud, Web Development
              </p>
              <p>
                <b>Career:</b> Software Developer, Data Analyst, Cloud Engineer
              </p>
            </div>
          </div>

          <div className="course-card">
            <div className="course-img">
              <img
                src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=800&q=80"
                alt="Mechanical Engineering"
              />
            </div>
            <div className="course-content">
              <span className="course-tag">Design</span>
              <h3>Mechanical Engineering</h3>
              <p>
                <b>Duration:</b> 4 Years
              </p>
              <p>
                <b>Subjects:</b> CAD, Robotics, Manufacturing, Thermodynamics
              </p>
              <p>
                <b>Career:</b> Design Engineer, Production Engineer
              </p>
            </div>
          </div>

          <div className="course-card">
            <div className="course-img">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                alt="Civil Engineering"
              />
            </div>
            <div className="course-content">
              <span className="course-tag">Infrastructure</span>
              <h3>Civil Engineering</h3>
              <p>
                <b>Duration:</b> 4 Years
              </p>
              <p>
                <b>Subjects:</b> Surveying, Structures, Construction, Smart Cities
              </p>
              <p>
                <b>Career:</b> Site Engineer, Structural Engineer
              </p>
            </div>
          </div>

          <div className="course-card">
            <div className="course-img">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
                alt="Electronics Engineering"
              />
            </div>
            <div className="course-content">
              <span className="course-tag">Electronics</span>
              <h3>Electronics Engineering</h3>
              <p>
                <b>Duration:</b> 4 Years
              </p>
              <p>
                <b>Subjects:</b> IoT, Circuits, Embedded Systems, VLSI
              </p>
              <p>
                <b>Career:</b> IoT Engineer, Embedded Developer
              </p>
            </div>
          </div>

          <div className="course-card">
            <div className="course-img">
              <img
                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80"
                alt="AI and Data Science"
              />
            </div>
            <div className="course-content">
              <span className="course-tag">AI</span>
              <h3>AI & Data Science</h3>
              <p>
                <b>Duration:</b> 4 Years
              </p>
              <p>
                <b>Subjects:</b> ML, Data Science, Python, Big Data, Deep Learning
              </p>
              <p>
                <b>Career:</b> AI Engineer, Data Scientist, ML Developer
              </p>
            </div>
          </div>

          <div className="course-card">
            <div className="course-img">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
                alt="Cyber Security"
              />
            </div>
            <div className="course-content">
              <span className="course-tag">Security</span>
              <h3>Cyber Security</h3>
              <p>
                <b>Duration:</b> 4 Years
              </p>
              <p>
                <b>Subjects:</b> Network Security, Ethical Hacking, Cloud Security
              </p>
              <p>
                <b>Career:</b> Security Analyst, Ethical Hacker
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="faculty" className="section faculty">
        <span className="small-title">Expert Team</span>
        <h2>Our Faculty Members</h2>

        <div className="faculty-grid">
          <div className="faculty-card">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80"
              alt="Dr Rajesh Sharma"
            />
            <h3>Dr. Rajesh Sharma</h3>
            <p>Head of Computer Engineering</p>
          </div>

          <div className="faculty-card">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80"
              alt="Prof Neha Kulkarni"
            />
            <h3>Prof. Neha Kulkarni</h3>
            <p>AI & Data Science Specialist</p>
          </div>

          <div className="faculty-card">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80"
              alt="Prof Amit Verma"
            />
            <h3>Prof. Amit Verma</h3>
            <p>Mechanical Design Expert</p>
          </div>
        </div>
      </section>

      <section id="campus" className="section campus">
        <span className="small-title">Campus Life</span>
        <h2>Modern Campus Environment</h2>

        <div className="campus-grid">
          <img
            src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=900&q=80"
            alt="Campus library"
          />
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80"
            alt="Students on campus"
          />
          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80"
            alt="Classroom"
          />
        </div>
      </section>

      <section id="facilities" className="section facilities">
        <span className="small-title light">Facilities</span>
        <h2>Campus Facilities</h2>

        <div className="facility-grid">
          <div className="facility-card">
            <img
              src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=700&q=80"
              alt="Digital Library"
            />
            <h3>Digital Library</h3>
            <p>Books, journals, e-resources, research papers, and study spaces.</p>
          </div>

          <div className="facility-card">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=700&q=80"
              alt="Computer Labs"
            />
            <h3>Computer Labs</h3>
            <p>Modern systems, internet, coding labs, and project rooms.</p>
          </div>

          <div className="facility-card">
            <img
              src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=700&q=80"
              alt="Research Center"
            />
            <h3>Research Center</h3>
            <p>Innovation labs for AI, robotics, IoT, and technical research.</p>
          </div>

          <div className="facility-card">
            <img
              src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=700&q=80"
              alt="Sports Complex"
            />
            <h3>Sports Complex</h3>
            <p>Cricket, football, volleyball, badminton, and gym facilities.</p>
          </div>

          <div className="facility-card">
            <img
              src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=700&q=80"
              alt="Hostel and Cafeteria"
            />
            <h3>Hostel & Cafeteria</h3>
            <p>Comfortable hostel rooms, hygienic food, and student support.</p>
          </div>

          <div className="facility-card">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=700&q=80"
              alt="Placement Cell"
            />
            <h3>Placement Cell</h3>
            <p>Resume building, mock interviews, internships, and company drives.</p>
          </div>
        </div>
      </section>

      <section id="admissions" className="section admission">
        <div className="admission-info">
          <span className="small-title">Join Meridian</span>
          <h2>Admissions Open 2026</h2>
          <p>
            Apply for our professional engineering programs and begin your journey
            toward a successful technical career.
          </p>

          <ul>
            <li>Merit-based admission process</li>
            <li>Scholarship support available</li>
            <li>Career counseling and placement guidance</li>
            <li>Modern campus with advanced facilities</li>
          </ul>
        </div>

        <form className="form" onSubmit={handleAdmissionSubmit}>
          <h3>Admission Enquiry Form</h3>

          <div className="form-row">
           <input name="firstName" type="text" placeholder="First Name" required />
           <input name="lastName" type="text" placeholder="Last Name" required/>
          </div>

          <div className="form-row">
            <input name="email" type="email" placeholder="Email Address" required />
            <input name="phone" type="tel" placeholder="Phone Number" required/>
          </div>

          <select name="course" required>
            <option value="">Select Course</option> 
            <option>Computer Engineering</option>
            <option>Mechanical Engineering</option>
            <option>Civil Engineering</option>
            <option>Electronics Engineering</option>
            <option>AI & Data Science</option>
            <option>Cyber Security</option>
          </select>

          <textarea name="message" placeholder="Message / Query"></textarea>

          <button type="submit">Submit Application</button>
        </form>
      </section>

      <section id="contact" className="section contact">
        <span className="small-title">Contact</span>
        <h2>Get In Touch</h2>
        <p>Email: info@meridian.edu</p>
        <p>Phone: +91 98765 43210</p>
        <p>Address: Pune, Maharashtra, India</p>
      </section>

      <SiteFooter />
    </>
    
  );
}

export default Home;

