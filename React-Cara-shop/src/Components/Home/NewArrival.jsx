import React from 'react';
import Card from '../Card';

export default function NewArrival() {
  const products = [
    {
      title: 'Cartoon Astronut T-Shirts',
      price: '500',
      brand: 'adidas',
      rating: 1,
    },
    {
      title: 'Cartoon Astronut T-Shirts',
      price: '900',
      brand: 'Nike',
      rating: 2,
    },
    {
      title: 'Cartoon Astronut T-Shirts',
      price: '400',
      brand: 'adidas',
      rating: 4,
    },
    {
      title: 'Cartoon Astronut T-Shirts',
      price: '200',
      brand: 'adidas',
      rating: 3,
    },
    {
      title: 'Cartoon Astronut T-Shirts',
      price: '1400',
      brand: 'Puma',
      rating: 5,
    },
    {
      title: 'Cartoon Astronut T-Shirts',
      price: '200',
      brand: 'Nike',
      rating: 2,
    },
  ];

  return (
    <div className="section-p1">
      <div className="row text-center mb-5">
        <h2>New Arrivals</h2>
        <p>Summer Collection New Modern Design</p>
      </div>

      <div className="row g-5">
        {products.map((prd, i) => {
          return (
            <div key={i} className="col-lg-3 col-md-4 col-sm-6 mt-0">
              <Card product={prd}></Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
