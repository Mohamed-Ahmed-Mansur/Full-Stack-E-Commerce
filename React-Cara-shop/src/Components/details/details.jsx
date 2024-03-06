import React, { useState } from 'react';
import styled from 'styled-components';

// const ProDetailsContainer = styled.div`
//   display: flex;
//   margin-top: 20px;
// `;

// const SingleProImage = styled.div`
//   width: 40%;
//   margin-right: 50px;
// `;

// const SmallImgGroup = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;

// const SmallImgCol = styled.div`
//   flex-basis: 24%;
//   cursor: pointer;
// `;

// const SingleProDetails = styled.div`
//   width: 50%;
//   padding-top: 30px;

//   h4 {
//     padding: 40px 0 20px 0;
//   }

//   h2 {
//     font-size: 26px;
//   }

//   select {
//     display: block;
//     padding: 5px 10px;
//     margin-bottom: 10px;
//   }

//   input {
//     width: 50px;
//     height: 47px;
//     padding-left: 10px;
//     font-size: 16px;
//     margin-right: 10px;

//     &:focus {
//       outline: none;
//     }
//   }

//   button {
//     background-color: #088178;
//     color: #fff;
//   }

//   span {
//     line-height: 25px;
//   }
// `;

// const FontAwesomeIcon = styled.span`
//   &:before {
//     content: "\f07a";
//     font-weight: 800;
//   }
// `;
const ProDetailsSection = styled.section`
  display: flex;
  margin-top: 20px;
  font-family: 'Spartan', sans-serif;
  font-size:0.8em;
`;

const SingleProImage = styled.div`
  width: 40%;
  margin-right: 50px;

  img {
    width: 100%;
  }

  .small-img-group {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    .small-img-col {
      flex-basis: 24%;

      img {
        width: 100%;
      }
    }
  }
`;

const SingleProDetails = styled.div`
  width: 50%;
  padding-top: 30px;

  h6 {
    margin-bottom: 10px;
    x
  }

  h4 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 36px;
    color: #088178;
    margin-bottom: 20px;
  }

  select {
    display: block;
    width: 172px;
    padding: 10px;
    margin-bottom: 10px;
  }

  input {
    width: 50px;
    height: 40px;
    padding-left: 10px;
    font-size: 16px;
    margin-right: 10px;
    text-align: center;
    inputMode: 'numeric';
   
  }

  button {
    border:none;
    border-radius:5px;
    background-color: #088178;
    color: #fff;
    padding: 10px  15px;
    margin-top: 10px;
    margin-bottom: 15px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }

  h4 {
    font-size: 20px;
    margin-top: 20px;
  }

  span {
    line-height: 25px;
  }
`;
const Details = () => {

    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (event) => {
      const newValue = event.target.value;
      setQuantity(newValue);
    };
    return (
       
        <div className='container'>
            <ProDetailsSection className="section-p1">
                <SingleProImage>
                    <img src="../../Assets/img/products/f1.jpg" alt="Main Product" />
                    <div className="small-img-group">
                    <div className="small-img-col">
                        <img src="../../Assets/img/products/f1.jpg" alt="Small Product 1" />
                    </div>
                    <div className="small-img-col">
                        <img src="../../Assets/img/products/f2.jpg" alt="Small Product 2" />
                    </div>
                    <div className="small-img-col">
                        <img src="../../Assets/img/products/f3.jpg" alt="Small Product 3" />
                    </div>
                    <div className="small-img-col">
                        <img src="../../Assets/img/products/f4.jpg" alt="Small Product 4" />
                    </div>
                    </div>
                </SingleProImage>

                <SingleProDetails>
                    <h6>Home / T-Shirt</h6>
                    <h4>Men's Fashion T Shirt</h4>
                    <h2>$139.00</h2>
                    <select id="size">
                    <option>Select Size</option>
                    <option>XL</option>
                    <option>XXL</option>
                    <option>Small</option>
                    <option>Large</option>
                    <option>Medium</option>
                    </select>
                    <input type="number" 
                    // value="1"
                    value={quantity}
                    min="1"
                    onChange={handleQuantityChange} />
                    <button className="normal">
                    Add To Cart
                    </button>
                    <h4>Product Details</h4>
                    <span>
                    The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100%
                    cotton, this classic fir preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck
                    and shoulder, and a seamless double-needle collar, and available in a range of colors, it offers it all in the
                    ultimate head-turning package.
                    </span>
                </SingleProDetails>
            </ProDetailsSection>
        </div>
    );
}

export default Details;
