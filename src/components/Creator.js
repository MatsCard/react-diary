import React from 'react';
import './styles/Creator.css'
import creator from '../images/creator.jpg'

function Creator(props) {

  return (
      <section className="creator pb-5">
          <div className="container-md px-4">
            <h1 className="text-white text-center py-5 fs-2">The Creator</h1>

            <div className="row">
                <div className="card-img-top col-12 col-md-2 p-0 text-center" >

                    <img src={creator} className="" alt="Creador Imagen" />
                </div>
                <div className="bg-cyan card-body col-12 col-md-8 d-flex flex-column justify-content-between px-3">
                    <div className="card-title">
                        <h2>Cardone Matias</h2>
                        <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit illum quis accusantium veritatis. Labore est reiciendis provident quas molestias? Modi, eaque vero. Iure inventore ad asperiores deleniti accusamus alias? Facere?</p>

                    </div>
                    
                    <div className="card-links">
                        <a href="https://www.instagram.com/matscard" className="card-link fs-4 text-cyan">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://github.com/MatsCard" className="card-link fs-4 text-cyan">
                            <i className="fab fa-github"></i>
                        </a>

                    </div>
                </div>
            </div>

          </div>
        </section>
  );
}

export default Creator;