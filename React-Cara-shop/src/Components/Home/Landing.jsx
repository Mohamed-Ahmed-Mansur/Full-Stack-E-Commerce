import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div id='landing' className=" section-p1">
      <div className="row">
        <div className="col-12">
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
      </div>
    </div>
  );
}
