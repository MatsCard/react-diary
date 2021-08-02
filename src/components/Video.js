import React from 'react';

import './styles/Video.css'

function Video(props) {

  return (
    
    <section className="video">
        <div className="container-md row align-items-center py-5 mx-auto">
        <div className="video-text col-12 col-xl-6 order-xl-2">
            <h4 className="text-cyan video-title">What is section 1?</h4>
            <p className="text-white video-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate exercitationem maiores magnam reiciendis suscipit praesentium, dolorum repellat perferendis sapiente veniam assumenda a sequi fugiat saepe ipsam, sunt optio quia rem. Non molestiae laboriosam facere recusandae quo excepturi doloremque. Non possimus rerum eaque quos nisi aperiam similique consequuntur incidunt ex, sequi deserunt modi alias eum omnis numquam obcaecati a eligendi corporis fuga ea, perferendis impedit quisquam ut ipsam! Deleniti ipsam rerum, quasi placeat obcaecati sunt molestiae eius veritatis nemo architecto ullam..</p>
        </div>
        <div className="video-media col-12 col-xl-6 order-xl-1">
          <div className="ratio ratio-16x9">
              <iframe className="video-media-iframe" src="https://www.youtube.com/embed/DWaB4PXCwFU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div> 

        </div>
    </div>
     </section>

      
  );
}

export default Video;

