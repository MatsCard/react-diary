import React from 'react';
import diarySpecification from '../images/specifications.png'
import './styles/Specification.css'

function Specification(props) {

  return (
      <section className="specification pb-5">
          <div className="container-md">
            <div className="row">

                <div className="col-12 text-center">
                    <h2 className="text-white specification-text py-4">Specifications</h2>
                </div>
                
                <div className="col-12 col-md-7 px-2">
                    
                    <div className="d-flex flex-column specification-text">
                        <h4 className="specification-text text-cyan specification-text border-bottom border-light pb-2">Dimensions</h4>
                        <img src={diarySpecification} alt="" />
                    </div>
                </div>

                <div className="col-12 col-md-5 specification-text">
                    <div className="d-flex flex-column">
                    <h4 className="specification-text text-cyan border-bottom border-light pb-2">Contents</h4>
                        <ul className="list-unstyled">
                            <li className="text-white pb-1">1 Bonus pokemon</li>
                            <li className="text-white pb-1">4 Pages</li>
                            <li className="text-white pb-1">3 Index pages</li>
                            <li className="text-white pb-1">5 Notes pages</li>
                        </ul>
                    <h4 className="specification-text text-cyan border-bottom border-light pb-2">Details</h4>
                        <ul className="list-unstyled">
                            <li className="text-white pb-1">Blue color</li>
                            <li className="text-white pb-1">Last forever</li>
                            <li className="text-white pb-1">Yellow pages</li>
                            <li className="text-white pb-1">5 Notes pages</li>
                        </ul>
                    
                    <h4 className="specification-text text-cyan border-bottom border-light pb-2">Materials</h4>
                        <ul className="list-unstyled">
                            <li className="text-white pb-1">Made of adamantium</li>
                            <li className="text-white pb-1">Soft pages</li>
                        </ul>

                    </div>
                </div>

            </div>

          </div>

      </section>
  );
}

export default Specification;

