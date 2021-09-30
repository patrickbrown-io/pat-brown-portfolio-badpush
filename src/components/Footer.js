import React from 'react';

// We declare an object called styles that will contain a few objects for card and heading styles
const styles = {
  // card: {
  //   margin: 20,
  //   background: '#e8eaf6',
  //   minHeight: 50,
  //   lineHeight: 3.5,
  // },
  // heading: {
  //   background: '#9a74db',
  //   minHeight: 50,
  //   lineHeight: 3.5,
  //   fontSize: '1.2rem',
  //   color: 'white',
  //   padding: '0 20px',
  //   borderRadius: "0px 50px 50px 0px"
  // },

  footer: {
    width: "100%",
    backgroundColor: "black",
    flex: 1,
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexWrap: "wrap",
},

  ul: {
    justifyContent: 'center',
    alignContent: 'center',
    flex: 3,
    color: 'whitesmoke',
    display: 'flex',
    margin: '1% 1%',
    flexDirection: 'row',
  },

  navlink: {
    color: 'white',
    padding: '0.5% 2%',
    textDecoration: 'none'
}

};

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Footer() {
  return (
    <>
    <ul style={styles.footer} className="nav position-fixed h100 b0">
      <li className="nav-item" style={styles.ul}>
        <a
          target="_blank"
          rel="noreferrer"
          style={styles.navlink}
          href="https://github.com/patrickbrown-io"
          onClick={() => console.log("hi!")}
        >
          Github
        </a>
      </li>
      <li className="nav-item" style={styles.ul}>
        <a
          style={styles.navlink}
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/patrick-brown-9930a365/"
          onClick={() => console.log('About')}
        >
          LinkedIn
        </a>
      </li>
      <li className="nav-item" style={styles.ul}>
        <a
          target="_blank"
          rel="noreferrer"
          style={styles.navlink}   
          href="https://patrickbrown-io.github.io/patrick-brown-portfolio/assets/Patrick%20Brown%20-%20Web%20Developer.pdf"
          onClick={() => console.log('Projects')}
        >
          Resume
        </a>
      </li>
      <li className="nav-item" style={styles.ul}>
        <a
          target="_blank"
          rel="noreferrer"
          style={styles.navlink}
          href="tel:8123229561"
        >
          Call
        </a>
      </li>
      <li className="nav-item" style={styles.ul}>
        <a
          target="_blank"
          rel="noreferrer"
          style={styles.navlink}
          href="mailto:patbrowndesigns@gmail.com"
        >


          Email


        </a>
      </li>
      
    </ul>
  </>
  );
}

export default Footer;