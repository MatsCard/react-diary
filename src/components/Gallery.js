import React from 'react';
import './styles/Gallery.css'
import gallery1 from '../images/gallery1.jpg'
import gallery2 from '../images/gallery2.jpg'
import gallery3 from '../images/gallery3.jpg'


function Gallery(props) {

  return (
      <section className="gallery">
          <div className="container-md">
          <h1 className="text-white text-center py-5 ">Gallery</h1>

          <div id="carouselExampleControls" className="carousel slide mx-auto pb-5" data-bs-ride="carousel">
              <div className="carousel-inner">
                  <div className="carousel-item active">
                  <img src={gallery1} className="d-block w-100" alt="Imagen galeria" />
                  </div>
                  <div className="carousel-item">
                  <img src={gallery2} className="d-block w-100" alt="Imagen galeria" />
                  </div>
                  <div className="carousel-item">
                  <img src={gallery3} className="d-block w-100" alt="Imagen galeria" />
                  </div>
              </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
          </div>
        

          </div>
      </section>
  );
}

export default Gallery;