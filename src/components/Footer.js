import React from 'react';

// We declare an object called styles that will contain a few objects for card and heading styles
const styles = {
  card: {
    margin: 20,
    background: '#e8eaf6',
    minHeight: 50,
    lineHeight: 3.5,
  },
  heading: {
    background: '#9a74db',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
    borderRadius: "0px 50px 50px 0px"
  },
};


// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Footer() {
  return (
    <>
    <ul style={styles.card} className="nav justify-content-center">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => console.log("hi!")}
        >
          Github
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => console.log('About')}
        >
          LinkedIn
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#project"
          onClick={() => console.log('Projects')}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => console.log("Hello!")}
        >
          Call
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => console.log("Hello!")}
        >
          Email
        </a>
      </li>
      
    </ul>
  </>
  );
}

export default Footer;