import React from 'react';
import Main from '../components/Main';
import Introduction from '../components/Introduction';
import Video from '../components/Video';
import Feature from '../components/Feature'
import Gallery from '../components/Gallery'
import Specification from '../components/Specification.js'
import LearnMore from '../components/LearnMore'
import Creator from '../components/Creator'
import SignUp from '../components/SignUp'
import Footer from '../components/Footer'


function Home(props) {

  return (
      <div className="">
          <Main></Main> 
          <Introduction></Introduction> 
          <Video></Video>
          <Feature></Feature> 
          <Gallery></Gallery>
          <Specification></Specification>
          <LearnMore></LearnMore>
          <Creator></Creator>
          <SignUp></SignUp>
          <Footer></Footer> 
      </div>
    
  );
}

export default Home;

