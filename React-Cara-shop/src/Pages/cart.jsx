import React from 'react';
import { useEffect, useState } from 'react';
import Navbar from '../Components/Home/Navbar';
import Footer from '../Components/Home/footer';

const Cart = () => {
  const [products, setProducts] = useState([]);

  function handleChange() {
    console.log('handleChange works');
  }

  useEffect(() => {
    setProducts([
      {
        id: 0,
        name: 'Cartoon Astronut T-Shirts',
        price: 745,
        brand: 'adidas',
        img: 'images/products/f1.jpg',
        quantity: 1,
      },
      {
        id: 1,
        name: 'Cartoon Astronut T-Shirts',
        price: 45,
        brand: 'adidas',
        img: 'images/products/f2.jpg',
        quantity: 2,
      },
      {
        id: 2,
        name: 'Cartoon Astronut T-Shirts',
        price: 65,
        brand: 'adidas',
        img: 'images/products/f3.jpg',
        quantity: 1,
      },
    ]);
  }, []);

  console.log('Cart component rendered');

  return (
    <>
      <Navbar></Navbar>
      <main>
        <section
          className="container-fluid d-flex flex-column justify-content-center align-items-center text-center"
          style={{
            backgroundImage: "url('./Assets/img/about/banner.png')",
            height: '40vh',
            backgroundSize: 'cover',
            padding: '1rem',
            color: '#fff',
          }}
        >
          <h2>#Cart_page</h2>
          <p className='text-white'>LEAVE A MESSAGE.We love to hear form you.</p>
        </section>

        <section id="cart" className="section-p1">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="thead-light">
                <tr>
                  <th scope="col">Remove</th>
                  <th scope="col">Images</th>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Subtotal</th>
                </tr>
              </thead>

              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <i className="far fa-times-circle"></i>
                    </td>
                    <td>
                      <img
                        src={product.img}
                        alt={product.name}
                        className="img-fluid"
                        style={{ width: '4.5rem' }}
                      />
                    </td>
                    <td>{product.name}</td>
                    <td>${product.price}</td>
                    <td>
                      <input
                        type="number"
                        value={product.quantity}
                        className="form-control"
                        onChange={handleChange}
                      />
                    </td>
                    <td>${product.price * product.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="cart-add" className="section-p1">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div id="coupon" className="mb-4">
                  <h3>Apply Coupon</h3>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Coupon"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="button">
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div id="subtotal">
                  <h3>Cart Totals</h3>
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>Cart Subtotal</td>
                        <td id="sup-price">$ 335</td>
                      </tr>
                      <tr>
                        <td>Shipping</td>
                        <td>Free</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Total</strong>
                        </td>
                        <td id="total-price">
                          <strong>$ 335</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <button className="btn btn-primary btn-block">
                    Proceed to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer></Footer>
    </>
  );
};

export default Cart;
