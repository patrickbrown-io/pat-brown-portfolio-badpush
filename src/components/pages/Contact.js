import React, {useState} from 'react';

export default function Contact() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, email, message, value } = e.target;

    if(name==='name'){
      console.log(name)
      return(setName(value))
    } else if (email==='email'){
      console.log(email)
      return(setEmail(value))
    }else {
      return(setMessage(value))
    }

  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <>
    <div className="contactForm d-flex justify-content-center flex-column align-items-center align-content-center">
      <p>
        Send me a message so we can connect!
      </p>
      <form className="form">
        <h4>Your Name:</h4>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
        />
        <h4>Your Email:</h4>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Last Name"
        />
        <h4>Your Message:</h4>
        <textarea
          cols="50"
          rows="10"
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Your message to Pat"
        />
        <br />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
    </>
  );
}
