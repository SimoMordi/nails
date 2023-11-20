import SammiNailsLogo from '../../Assets/Logo/logo.png'
import tropicalTouch from '../../Assets/Images/img7.png'
import './About.css';


const About = () => {
  return (
    <div className="about-page-container">
      <header className="gallery-header">
        <img src={SammiNailsLogo} alt="Sammi Nails Spa Logo" className="logo-image" />
        {/* You can replace <h1>Navbar</h1> with an actual navigation bar component */}
        <nav>
          <ul className="navigation-menu">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero-section">
          <img src={tropicalTouch} alt="Unleash your power with nails" className="hero-image" />
        </section>

        <section className="who-we-are-section">
          <h2>Who We Are</h2>
          <p>At Sammi Nails Spa, we believe in expressing your individuality through our bespoke nail artistry...</p>
        </section>

        <section className="process-section">
          <h2>Our Process</h2>
          <ol className="process-list">
            <li><strong>Consultation:</strong> Understand your unique style and preferences.</li>
            <li><strong>Design:</strong> Craft a nail design that represents you.</li>
            <li><strong>Build:</strong> Bring your custom design to life with precision.</li>
            <li><strong>Quality Assurance:</strong> Ensure perfection in every detail.</li>
            <li><strong>Launch:</strong> Present your final exquisite nail art.</li>
          </ol>
        </section>

        <section className="uniqueness-section">
          <h2>Express Yourself with Unique Nails</h2>
          <p>Discover the art of nail design that captures your essence and showcases your personality.</p>
        </section>

        <section className="team-section">
          <h2>Our Team</h2>
          <div className="team-members">
            <article className="team-member">
              <img src="/path/to/team-member1.jpg" alt="Jane Doe - Lead Nail Artist" />
              <h3>Simo M </h3>
              <p>Lead Nail Artist</p>
            </article>
            {/* Add team members */}
          </div>
        </section>

        <section className="client-stories-section">
          <h2>Client Stories</h2>
          <div className="client-testimonials">
            <blockquote>
              <p>"Sammi Nails Spa transformed my vision into reality. The attention to detail is unmatched!"</p>
              <footer>— Sarah B., Satisfied Client</footer>
            </blockquote>
            {/* Generate client testimonials */}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <section className="footer-content">
          <h2>Contact Us</h2>
          <address>
            <p>Email: <a href="mailto:contact@example.com">contact@example.com</a></p>
            <p>Phone: <a href="tel:123-456-7890">123-456-7890</a></p>
          </address>
        </section>
      </footer>
    </div>
  );
};

export default About;
