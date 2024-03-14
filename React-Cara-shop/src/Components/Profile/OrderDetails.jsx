import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import axios from 'axios';

export default function OrderDetails() {
  const location = useLocation();
  const [allProduct, setAllProduct] = useState(null);

  const fetchProduct = async (productID) => {
    try {
      const { data: products } = await axios.get(
        `http://localhost:3001/products/${productID}`
      );
      return products;
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  const fetchProductsForOrders = async (product) => {
    // console.log(product);
    try {
      const productsPromises = product?.map(async (order) => {
        // Fetch product details for each order
        const productData = await fetchProduct(order);
        return productData;
      });
      // console.log(productsPromises);
      const products = await Promise.all(productsPromises);
      // Return the products array
      setAllProduct(products);
      return products;
    } catch (error) {
      console.error('Error fetching products for orders:', error);
      // Return an empty array in case of error
      return [];
    }
  };

  useEffect(() => {
    // console.log(location)
    if (location.state && location.state.data) {
      // setProduct(location.state.data);
      fetchProductsForOrders(location.state.data.productID);
    }
  }, [location]);

  const products = [
    {
      title: 'Cartoon Astronut T-Shirts',
      price: '500',
      brand: 'adidas',
      rating: 2,
      id: '43583594',
    },
    {
      title: 'Blue Pants',
      price: '400',
      brand: 'Puma',
      rating: 5,
      id: '495834584',
    },
  ];

  const renderStars = (ratings) => {
    const stars = [];
    const fullStars = Math.floor(ratings);
    const remainder = ratings - fullStars;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <i key={i} className="fas fa-star" style={{ color: '#efbb2d' }}></i>
      );
    }

    if (remainder >= 0.5) {
      stars.push(<i key={stars.length} className="fa-solid fa-star-half" style={{ color: '#efbb2d' }}></i>);
    }

    return stars;
  };

  return (
    <div>
      <div
        className="w-100 border-bottom"
        style={{ backgroundColor: '#cccccc13' }}
      >
        <h4 className="p-3 mb-0">Order: {location?.state?.data?.orderID}</h4>
      </div>
      <div className="card-body">
        {allProduct?.map((product, i) => {
          return (
            <div key={i} className="">
              <div id="profileCard">
                <div className="d-flex" style={{ gap: '1.5rem' }}>
                  <div style={{ maxWidth: '120px' }}>
                    <img
                      src={product.images[0]}
                      alt="productImg"
                      className="w-100"
                      style={{ borderRadius: '8px' }}
                    />
                  </div>

                  <div className="flex-fill d-flex flex-column justify-content-between">
                    <div className="des">
                      <div className="d-flex align-items-center justify-content-between">
                        <span className="brand">{product.brand}</span>
                        <div>
                          <NavLink
                            to={{
                              pathname: '/profile/account',
                              state: { product },
                            }}
                            className="text-decoration-none"
                          >
                            <h6 className="p-1" style={{ color: '#088178' }}>
                              Buy Again
                            </h6>
                          </NavLink>
                        </div>
                      </div>
                      <h5 className="title">{product.title}</h5>
                    </div>

                    <div className="footer">
                      <div className="stars mb-2">
                        <span className="brand"> ({product.ratings}) </span>
                        {renderStars(product.ratings)}
                      </div>
                      <h6 className="mb-0">${product.price}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
