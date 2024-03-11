import React, { useEffect, useState } from 'react';
import Card from '../Card';
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

export default function Featured() {

  let [data1, setdata1] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetch("http://localhost:3001/orders").then(res => res.json());
        data.reverse();
  
        const productIds = data.flatMap(prd => prd.productID);
        // Used await Promise.all(...) to wait for all fetch requests to complete before updating the state.
        const productDataArray = await Promise.all(productIds.map(async (p) => {
          const response = await fetch(`http://localhost:3001/products/${p}`);
          const productData = await response.json();
          return productData;
        }));
        setdata1(productDataArray);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getData();
  }, []);

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
          
          {data1.map((prd) => {
            return (
            
              <SplideSlide key={prd.id} >
                <Card product={prd}></Card>
              </SplideSlide>

            );
          })}
        </Splide>
      </div>
    </div>
  );
}
