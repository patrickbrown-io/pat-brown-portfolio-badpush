import React, {useState} from 'react';

const styles = 

export default function Contact() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, email, message, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    return name === 'name' ? setName(value) : setEmail(value) && setMessage(value);
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contactForm">
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
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
