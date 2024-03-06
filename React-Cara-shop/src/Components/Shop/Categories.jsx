import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Search from './Search';

export default function Categories() {
  const categoriesArr = ['cat1', 'cat2', 'cat3'];

  const [currSub, setCurrSub] = useState('');

  const { sub } = useParams();

  useEffect(() => {
    setCurrSub(sub);
  }, [sub]);

  return (
    <div id="categories">
      <div className="d-flex justify-content-between align-items-center flex-wrap">
        <h5 style={{ fontWeight: '700' }}>Category</h5>

        <NavLink to={'/shop'} className='text-decoration-none'>
          <h4
            className="text-success"
            style={{ fontSize: '1rem', fontWeight: '700'}}
          >
            Clear
          </h4>
        </NavLink>
      </div>
 
      <div className='mt-4'>
        {categoriesArr.map((cat, i) => {
          return (
            <NavLink key={i} className="listCat" to={`/shop/${cat}`}>
              <h4 className={currSub === cat ? 'text-success' : 'text-dark'}>{cat}</h4>
            </NavLink>
          );
        })}
      </div>
    </div>

   
  );
}
