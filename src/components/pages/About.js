import React from 'react';

const styles = {
  highlight: {
    fontSize:'1.25rem',
    color:'orange',
    fontStyle:'thick'
},
  littleImg: {
    width:300,
    height:'100%',
    objectFit: 'contain',
    alignItems:'center',
    justifyContent:'center'
  }
}

export default function About() {
  return (
    <>
    <div className="d-flex justify-content-center flex-column align-items-center align-content-center">
        <img className="card-img-top" style={styles.littleImg} src="https://media-exp1.licdn.com/dms/image/C4E03AQG3tQ4GX-RDgQ/profile-displayphoto-shrink_800_800/0/1592799089030?e=1638403200&v=beta&t=JQmthvZNeKn8jvvV5BdduLYYcoGAzu-lB1Ad-BzWQYA" alt="A handsome young web developer"/>
        <p className="card-text">My Name is Pat and I make things. After a 7 year career making marketing content, I started my journey web-development and was immediately attracted to the challenge.</p>
        <p className="card-text">I am a full-stack web developer and my preferred stack is MERN</p>
        <p className="card-text">Let's Build Something Together</p>
      </div>

    <div w-50 d-flex flex-row>
      <ul className="list-group d-flex justify-content-center flex-column align-items-center align-content-center">
        <li className="list-group-item"><span style={styles.highlight}>Languages: </span >Javascript ES6, CSS3, HTML5, mySQL</li>
        <li className="list-group-item"><span style={styles.highlight}>Applications: </span>GitHub, WordPress, SquareSpace, mySQL Workbench, Robo3T</li>
        <li className="list-group-item"><span style={styles.highlight}>Tools: </span>Node, Bootstrap, jQuery, React, GitBash, Express.js, Handlebars, Sequelize, Mongoose</li>
      </ul>
    </div> 
    </>
  );
}
