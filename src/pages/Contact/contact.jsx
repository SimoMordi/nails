
import EmailIcon from '@mui/icons-material/Email';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import './contact.css';
import { useState } from 'react';

const Contact = () => {

  const [contactFormData, setContactFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message:'',
  })

  const handleChange = (e) =>{
    const {name , value } = e.target;
    setContactFormData((prevState)=>({
      ...prevState,
      [name]: value,
    }))
  }

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
            <span className="icon icon-email"> <EmailIcon/> </span>
              <div className="text">
                <p>Email</p>
                <p>Send us an email today!</p>
                <p>sammnails@example.com</p>
              </div>
            </div>
            <div className="detail">
            
              <span className="icon icon-phone"> <PhoneInTalkIcon/> </span>
              <div className="text">
                <p>Phone</p>
                <p>Call us for an appointment.</p>
                <p>(425) 379-6178</p>
              </div>
            </div>
          </div>
        </div>
        {/*contact form component
          form 
          first name  - last name
          email
          message
          state, handlesubmit function, handlechange function
          submit
          make sure input is require
          be able to log the input in the console

          <ContactForm />
           */}
        <form action="">

        </form>
        <div className="contact-form">
          <div className="name-fields">
            {/* Name Inputs */}
            <input 
            value={contactFormData.firstName}
            name='firstName'
            onChange={handleChange}
            type="text" placeholder="First Name" />
            <input 
            value={contactFormData.lastName}
            name='lastName'
            onChange={handleChange}
            type="text" placeholder="Last Name" />
          </div>
          {/* Email */}
          <input 
          value={contactFormData.email}
          name='email'
          onChange={handleChange}
          type="email" placeholder="Email" />
          {/* Message */}
          <textarea 
          value={contactFormData.message}
          name='message'
          onChange={handleChange}
          placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </div>
      </div>
      <h1 className="footer">Footer</h1>
    </div>
  );
};

export default Contact;
