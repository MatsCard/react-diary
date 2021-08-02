import React from 'react';
import diaryCloseUp from '../images/diary-close-up.jpg'
import './styles/Feature.css'
import iconCalendar from '../images/icon_yearly-themes.png';
import section1 from '../images/section-1.png'

function Main(props) {

  return (
    <section className="feature d-inline-block text-center pb-5">
        <img className="feature-cover" src={diaryCloseUp} alt="" />
      <div className="container-md">
        <img className="py-3" src={iconCalendar} alt="" />
        <p className="feature-title text-cyan">SECTION 1</p>
        <h3 className="feature-title text-white">Long Title</h3>
        <p className="feature-description text-cyan px-3 mx-auto py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel cupiditate amet quidem, numquam alias temporibus aspernatur a repellendus facilis esse laborum commodi debitis pariatur nam soluta possimus officia aliquid recusandae.</p>

        <div className="feature-side row m-0">
          <div className="col-12 col-md-6 feature-side-image text-center">
            <img className="" src={section1} alt="" />

          </div>
          <div className="feature-description col-12 col-md-6 text-start d-flex flex-column justify-content-start py-5">
            <h1 className="feature-title text-cyan">Lala</h1>
            <ul className="list-inline feature-text text-white">
              <li className="list-inline-item">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
            <h1 className="feature-title text-cyan">Mega</h1>
            <ul className="list-inline feature-text text-white">
              <li className="list-inline-item">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li className="list-inline-item">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
            <h1 className="feature-title text-cyan">Tera</h1>
            <ul className="list-inline feature-text text-white">
              <li className="list-inline-item">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li className="list-inline-item">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>

          </div>
        </div> 

      </div>
    </section>
  );
}

export default Main;

