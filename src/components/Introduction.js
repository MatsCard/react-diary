import React from 'react';
import './styles/Introduction.css'
import diary from  '../images/diary2.png'

function Introduction(props) {

  return (
      <section className="introduction">
          <div className="introduction-background ">
            <div className="container-md  text-white introduction-title text-center pt-4 ">
                <div className="introduction-description">
                    <h1 className="introduction-title">THE DIARY SYSTEM</h1>
                    <h4>from The Creator</h4>
                    <h2 className="introduction-text text-cyan">Helping you to organize and achieve</h2>
                    
                    <button className="btn-cyan text-white introduction-title btn my-5">Buy Now</button>
                    
                </div>

                <div className="introducion-img">
                    <img src={diary} alt="" />
                </div>
                <div className="introduccion-info mt-5 pt-5 introduction-title text-white introduction-title px-4">
                    <h4>What is The Theme System?</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aperiam molestias quis dignissimos nam, expedita magnam repudiandae excepturi harum modi!</p>
                </div> 

            </div>

          </div>
      </section>
      
  );
}

export default Introduction;

