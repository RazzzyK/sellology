import React from 'react';
import '../css/StaticPage.css'
import Footer from '../features/Footer';

const ContactPage = () => {
  return (
    <div>
    <div className="contact-page">
      <div className="contact-info">
        <h1 className='flex justify-center font-semibold text-3xl pb-8'>Contact Us</h1>
        <p className='flex justify-center pb-8'>If you have any questions, feedback, or inquiries, please don't hesitate to reach out to us.</p>
        <p className='flex justify-center pb-4'> You can contact us via email or through our social media channels:</p>
        <ul>
          <li className='flex justify-center'>Email: contact@ComingSoon.com</li>
          <li className='flex justify-center'>Twitter: @ComingSoon</li>
          <li className='flex justify-center'>Facebook: /ComingSoon</li>
          <li className='flex justify-center'>Instagram: @ComingSoon</li>
        </ul>
      </div>
      <div className="contact-form">
        <h1 className='flex justify-center font-semibold text-3xl pb-8'>Send Us a Message</h1>
        <form className='pb-8'>
          <div className="form-group">
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div> 
    <div>
    </div>
    </div>
  );
}

export default ContactPage;