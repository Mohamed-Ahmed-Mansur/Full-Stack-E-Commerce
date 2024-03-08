/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Home/Navbar';
import Footer from '../Components/Home/footer';

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

  function handleAdd(product) {
    const updatedProducts = products.map(p => {
      if (p.id === product.id) {
        document.getElementById(product.id).querySelector("td div input").value++;
        document.getElementById(product.id).querySelector(".suptotal").innerHTML = `$${product.price * (p.quantity + 1)}`
        return { ...p, quantity: p.quantity + 1 };
      }
      return p;
    });
    setProducts(updatedProducts);
  }

  function handleSubtract(product) {
    const updatedProducts = products.map(p => {
      if (p.id === product.id && p.quantity > 0) {
        document.getElementById(product.id).querySelector("td div input").value--;
        document.getElementById(product.id).querySelector(".suptotal").innerHTML = `$${product.price * (p.quantity - 1)}`
        return { ...p, quantity: p.quantity - 1 };
      }
      return p;
    });
    setProducts(updatedProducts);
  }

  function handleRemove(id) {
    const updatedProducts = products.filter(p => p.id !== id);
    localStorage.setItem('cart', JSON.stringify(JSON.parse(localStorage.getItem('cart')).filter(item => item.id !== id)))
    setProducts(updatedProducts);
  }

  function handleChange(product, quantity) {
    const updatedProducts = products.map(p => {
      if (p.id === product.id) {
        return { ...p, quantity };
      }
      return p;
    });
    setProducts(updatedProducts);
  }

  function calculateSupTotals() {
    let sum = 0;
    products.forEach(product => {
      sum += product.price * product.quantity;
    });
    setSubtotal(sum); 
    setTotal(sum); // Assuming total is same as subtotal for now
  }

  useEffect(() => {
    calculateSupTotals();
  }, [products]);

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem('cart')) || []);
  }, []);


  console.log('Cart component rendered');

  // if (typeof products[0] === "undefined") {
  //   return (<p>Your Cart is <b>Empty</b></p>);
  // }

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
          <h1>#Cart_page</h1>
          <p className='text-white'>LEAVE A MESSAGE. We love to hear form you.</p>
        </section>

        <section id="cart" className="section-p1">
          <div className="table-responsive">
            <table className="table border-0">
              <thead className="thead-light">
                <tr>
                  <th scope="col" className="border-top-0 align-middle text-center">Remove</th>
                  <th scope="col" className="border-top-0 align-middle text-center">Images</th>
                  <th scope="col" className="border-top-0 align-middle text-center">Product</th>
                  <th scope="col" className="border-top-0 align-middle text-center">Price</th>
                  <th scope="col" className="border-top-0 align-middle text-center">Quantity</th>
                  <th scope="col" className="border-top-0 align-middle text-center">Subtotal</th>
                </tr>
            </thead>

            <tbody>
                {products.length === 0 ?        
                <tr id="empty-cart" className="d-flex justify-content-center align-items-center vh-75">
                  <td><h1>Your Cart is <span style={{ fontWeight: "800", color: "#088178"}}>Empty</span></h1></td>
                </tr> : products?.map((product) => (
                  <tr id={product.id} key={product.id}>
                    <td className="align-middle text-center">
                      <i className="far fa-times-circle" style={{ cursor: "pointer" }} onClick={() => handleRemove(product.id)}></i>
                    </td>
                    <td className="align-middle text-center">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="img-fluid"
                        style={{ width: '4.5rem', borderRadius: "5px" }}
                      />
                    </td>
                    <td className="align-middle text-center">{product.title}</td>
                    <td className="align-middle text-center">${product.price}</td>
                    <td className="align-middle text-center">
                      <div className="input-group">
                        <input
                          type="text"
                          value={product.quantity}
                          className="form-control mx-auto text-center"
                          style={{ width: "0.5rem"}}
                          onChange={handleChange}
                        />
                        <div className="input-group-append">
                          <button className="btn btn-outline-secondary" type="button" onClick={() => handleAdd(product)}><i className="fa-solid fa-angle-up"></i></button>
                          <button className="btn btn-outline-secondary" type="button" onClick={() => handleSubtract(product)}><i className="fa-solid fa-angle-down"></i></button>
                        </div>
                      </div>
                    </td>
                    <td className="align-middle text-center suptotal">${product.price * product.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="cart-add" className="section-p1">
          <div className="d-flex justify-content-around">
            <div className="col-md-4 mb-4 mb-md-0">
              <div id="coupon" className="mb-4">
                <h3>Apply Coupon</h3>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Coupon"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary" style={{ backgroundColor: "#088178", border: "1px solid #088178" }}>
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div id="subtotal">
                <h3>Cart Totals</h3>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Cart Subtotals</td>
                      <td id="sup-price">$ {subtotal}</td>
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
                        <strong>$ {total}</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <button className="btn btn-primary btn-block" style={{ backgroundColor: "#088178", border: "1px solid #088178" }}>
                  Proceed to checkout
                </button>
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
