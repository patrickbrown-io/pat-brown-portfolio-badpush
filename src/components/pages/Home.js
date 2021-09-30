import React from 'react';
import Typewriter from 'typewriter-effect'

const styles = {
  bigImg: {
    width:'100%',
    maxHeight:'75%'
  },
  imgWrapper: {
    position:'relative',
    width:'100%'

  },
  imgText:{
    position: 'absolute',
    top:'40%',
    left:'5%',
    width:'100%'
  },
  spanStyle:{
    color:'white',
    letterSpacing:'-1px',
    fontSize:'3rem',
    padding:'10px'
  },

  BigImgText:{
    position: 'absolute',
    top:'30%',
    left:'5%',
    width:'100%',
    marginTop:'5%'
  },
  bigSpanStyle:{
    color:'white',
    fontSize:'6rem',
    letterSpacing:'-1px',
    padding:'10px'
  }
}

export default function Home() {
  return (
    <>
    <div style={styles.imgWrapper}>
      <h2 style={styles.imgText}><span style={styles.spanStyle}>I am a...</span></h2>
      <h2 style={styles.BigImgText}><span style={styles.bigSpanStyle}>
        <Typewriter options ={{
          strings:["Full-Stack Developer","Graphic Designer","Marketing Guru","Web Engineer","Graphic Designer","Media Specialist"],
          autoStart: true,
          loop: true,
        }}/>
        
        </span></h2>
      <img style={styles.bigImg}src="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2671&q=80"/>
    </div>
    </>
  );
}
