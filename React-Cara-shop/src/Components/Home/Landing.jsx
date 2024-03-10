import React from 'react';
import landingImg from '../../Assets/15.png';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div id='landing' className=" section-p1">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h4>Trade-in- offer</h4>
          <h2>Super Value deals</h2>
          <h1>On all products</h1>
          <p>Save more width coupons & up to 70% off!</p>
          <Link to="/shop">
            <button>
              Shop Now
            </button>
          </Link>
        </div>
        <div className="col-md-6">
          <img className='w-100' src={landingImg} alt="landingImage" />
        </div>
      </div>
    </div>
  );
}
