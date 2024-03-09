import React, { useEffect, useState } from 'react';
import Card from '../Card';

export default function NewArrival() {

  let [data1, setdata1] = useState([]);
  
  async function getData() {
    try {
      await fetch("http://localhost:3001/products").then(res => res.json()).then(data => setdata1(data.slice(0, 8)));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
    useEffect(() => {
      getData();
    },[]);

  return (
    <section className="section-p1">
      <div className="row text-center mb-5">
        <h2>New Arrivals</h2>
        <p>Summer Collection New Modern Design</p>
      </div>

      <div className="row g-5 ">
        {data1.map((prd, i) => {
          return (
            <div key={i} className="col-lg-3 col-md-4 col-sm-6 mt-0 mb-4 ">
              <Card product={prd}></Card>
            </div>
          );
        })}
      </div>
    </section>
  );
}
