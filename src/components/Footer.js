import React from 'react';
import './styles/Footer.css'

function Footer(props) {

  return (
      <section className="footer py-2 pt-4">
          <div className="text-white row justify-content-between align-items-center py-0 m-0">
            <p className="col-12 col-md-6 text-center text-md-start mb-2"><i className="far fa-copyright"></i> MatsCard brand</p>
            <p className="col-12 col-md-6 text-center text-md-end mb-2">Website by Matias</p>

          </div>
      </section>
  );
}

export default Footer;