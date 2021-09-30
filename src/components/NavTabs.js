import React from 'react';

// We declare an object called styles that will contain a few objects for card and heading styles
const styles = {
  // card: {
  //   margin: 20,
  //   background: '#e8eaf6',
  //   minHeight: 50,
  //   lineHeight: 3.5,


  // },
  heading: {
    textAlign: 'center',
    width: '100%',
    marginBottom: '1%',
    padding:'2%',
    fontSize: '2rem',
    color:'white',
    backgroundColor:'black',
    alignContent:'center',
    justifyContent: 'center',
  },
};


// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <>
    <h1 style={styles.heading} className="navbar-brand nav mx-0">
      | Pat Brown |
    </h1>
    <ul style={styles.card} className="nav nav-tabs justify-content-center">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#project"
          onClick={() => handlePageChange('Projects')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  </>
  );
}

export default NavTabs;
