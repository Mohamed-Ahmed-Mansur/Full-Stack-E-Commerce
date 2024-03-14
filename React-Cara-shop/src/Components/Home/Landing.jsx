import React, { memo } from 'react';
import landingImg from '../../Assets/15.WebP';
import { Link } from 'react-router-dom';

export default memo(function Landing() {

  function handleImage() {
    const src = localStorage.getItem('15');
    if (src) {
      return JSON.parse(src);
    }
    localStorage.setItem('15', JSON.stringify(landingImg));
    return landingImg;
  }

  return (
    <div id='landing' className=" section-p1">
      <div className="row align-items-center">
        <div className="col-md-6 col-sm-12 my-4">
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
        <div className="col-md-6 col-sm-12 d-flex justify-content-center">
          <img className='w-50' src={handleImage()} alt="landingImage" />
        </div>
      </div>
    </div>
  );
});
