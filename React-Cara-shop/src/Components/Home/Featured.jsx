import React, { useEffect } from 'react';
import Card from '../Card';
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

export default function Featured() {
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

  async function getData() {
    const data = await fetch("http://localhost:3001/products").then(res => res.json()).then(data => data)
    console.log(data)
  }

  useEffect(() => {
    getData();
    // const data = fetch("http://localhost:3001/products").then(res => res.json()).then(data => data)
    // console.log(data)
  });

  return (
    <div id="featured" className='my-5'>
      <div className="text-center mb-5">
        <h2>Featured Products</h2>
        <p>Summer Collection New Modern Design</p>
      </div>

      <div className="g-5">
        <Splide
          options={{
            type: 'loop',
            gap: '3em',
            drag: 'free',
            arrows: false,
            pagination: false,
            perPage: 4,
            autoScroll: {
              pauseOnHover: true,
              pauseOnFocus: false,
              rewind: false,
              speed: 1,
            },
            breakpoints: {
              900: { perPage: 3 },
              640: { perPage: 2 },
            },
          }}
          extensions={{ AutoScroll }}
        >
          {products.map((prd) => {
            return (
              
                <SplideSlide>
                  <Card product={prd}></Card>
                </SplideSlide>
             
            );
          })}
        </Splide>
      </div>
    </div>
  );
}
