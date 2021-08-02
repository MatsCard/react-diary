import React from 'react';
import './styles/SignUp.css'

function SignUp(props) {

  return (
      <section className="sign-up ">

        <div className="sign-up-background py-5">
            <div className="container">
            
                <div className="text-white text-center py-5">
                    <div className="sign-up-description">
                        <h1 className="sign-up-title">THE DIARY SYSTEM</h1>
                        <p className="sign-up-description text-cyan">Better planning.</p>
                        
                        <button className="btn-cyan text-white btn mt-3">Buy Now</button>
                        
                    </div>
                </div>
                <div className="signup-info">
                    <h5 className="text-white text-center pt-5 mb-1 font-weight-bold">Stay up to date</h5>
                    <p className="text-white text-center ">Make sure to register and get our spam</p>

                </div>
                
                <div className="input-group mb-3">
                    <input type="email" className="form-control" placeholder="Email" aria-label="Email"/ >
                    <button className="btn-cyan text-white btt">Sign Up Now</button>
                </div>
                
                        

            </div>
            </div>
      </section>
  );
}

export default SignUp;