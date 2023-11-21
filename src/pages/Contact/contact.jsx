
import EmailIcon from '@mui/icons-material/Email';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import './contact.css';
import { ContactForm } from '../../components/ContactForm/contactForm';


const Contact = () => {

  return (
    <div className="contact-container">
      <h1 className="navbar">Navbar</h1>
      <div className="contact-content">
        <div className="contact-info">
          <h2>Contact Us!</h2>
          <p>Feel free to reach out to us on social media for any questions</p>
          <p>about nail designs or services! We're here to assist you.</p>

          <div className="contact-details">
            <div className="detail">
              <span className="icon icon-email"> <EmailIcon /> </span>
              <div className="text">
                <p>Email</p>
                <p>Send us an email today!</p>
                <p>sammnails@example.com</p>
              </div>
            </div>
            <div className="detail">

              <span className="icon icon-phone"> <PhoneInTalkIcon /> </span>
              <div className="text">
                <p>Phone</p>
                <p>Call us for an appointment.</p>
                <p>(425) 379-6178</p>
              </div>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
      <h1 className="footer">Footer</h1>
    </div>
  );
};

export default Contact;
