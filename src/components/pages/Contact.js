import React from 'react';


const Contact = () => {
  const name = '[Krystal Petrosky]';
  const email = '[kpetrosky36@gmail.com]';
  const phone = '[520-609-0147]';
  

  return (
    <div>
      <h1>Contact</h1>

      <div className="contact-info">
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
      
      </div>

      <p>If you have any questions or inquiries, please feel free to reach out to me using the contact information provided above.</p>
    </div>
  );
};

export default Contact;
