import React from 'react';
import emailjs from '@emailjs/browser';

function App() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const { firstName, lastName, email, phone, pickAddress, date, workType } = event.target.elements;
    const templateParams = {
      first_name: firstName.value,
      last_name: lastName.value,
      email: email.value,
      phone: phone.value,
      pick_address: pickAddress.value,
      desired_date: date.value,
      work_type: workType.value,
    };

    try {
      // Send the booking request
      await emailjs.send(
        'service_dtev5oh',            // Your EmailJS service ID
        'template_da2ky7k',           // Template ID for booking request
        templateParams, 
        'gIaqH0ckFKVbQqbz7'           // Your EmailJS public key
      );
  
      alert('Booking request sent successfully! A confirmation email has been sent to your email address.');
      event.target.reset(); // Reset the form after successful submission
  
    } catch (error) {
      console.error('Error sending booking request:', error);
      alert('Failed to send booking request. Please try again.');
    }
  }

  return (
    <div style={{ maxWidth: '100vw', color: '#A86A24', margin: 'auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Add Media Query for Responsive Text Styling */}
      <style>
        {`
          h1 {
            font-size: 2.5em;
          }
          h2 {
            font-size: 1.8em;
          }
          p {
            font-size: 1.2em;
          }

          @media (max-width: 800px) {
            h1 {
              font-size: 4em;
            }
            h2 {
              font-size: 5m;
            }
            p {
              font-size: 1em;
            }
            .header-content {
              padding: 10px;
              backgroundPosition: 'center top';
            }
          }
        `}
      </style>

      {/* Heading Section with Background Color */}
      <div style={{ 
        backgroundImage: 'url(/HomeHero5.png)',
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', padding: '20px', borderRadius: '8px', textAlign: 'center' 
      }}>
        <h1>   []</h1>
        <p style={{ fontSize: '1.2em', fontWeight: 'bold', color: '' }}>
        </p>
        <h2 style={{ fontSize: '1.5em', color: '#A86A24', marginBottom: '30px', marginTop: 30 }}>
          Request a Service or Get a Quote
        </h2>
      </div>

      <div style={{ border: '2px solid #ccc', padding: '20px', borderRadius: '8px' }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: 10 }}>
          <label>First Name:</label>
          <input type="text" name="firstName" required />

          <label>Last Name:</label>
          <input type="text" name="lastName" required />

          <label>Contact Email:</label>
          <input type="email" name="email" required />

          <label>Phone Number:</label>
          <input type="tel" name="phone" required />

          <label>Home Address:</label>
          <input type="text" name="pickAddress" required />

          <label>Type of Work Requested:</label>
          <select name="workType" required>
            <option value="">Select Type</option>
            <option value="Handyman Services">Handyman Services</option>
            <option value="Appliance Installation">Appliance Installation</option>
            <option value="Light Construction">Light Construction</option>
            <option value="Other">Other</option>
          </select>

          <label>Desired Date:</label>
          <input type="date" name="date" required />

          <button type="submit" style={{ marginTop: '10px', padding: '10px', fontSize: '1em', cursor: 'pointer' }}>Request Service</button>
        </form>
      </div>

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <h3>Need Help Now? Contact Us!</h3>
        <p>Phone: <a href="tel:2035144202" style={{ color: '#A86A24', textDecoration: 'none' }}>(203) 514-4202</a></p>
      </div>

      {/* Background Image Div with Semi-Transparent Overlay */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: 100,
          marginTop: '20px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',   
            height: 100,
            backgroundImage: "url('/Hammer.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.5,
            zIndex: -1,
          }}
        ></div>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            zIndex: -2,
          }}
        ></div>
      </div>

      <footer style={{ marginTop: '20px', textAlign: 'center', fontSize: '0.9em', color: '#555' }}>
        <p>Home Heroes - Your trusted service partners!</p>
      </footer>
    </div>
  );
}

export default App;
