import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import prdImg from "../../Assets/img/products/f2.jpg";
import axios from "axios";
import Reviews from "./Reviews";

const ProDetailsSection = styled.section`
  display: flex;
  margin-top: 20px;
  font-family: "Spartan", sans-serif;
  font-size: 0.8em;
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
      flex-basis: 35%;
      margin: 2px;

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
    font-size: 20px;
  }

  h4 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 36px;
    color: #088178;
    margin-bottom: 20px;
    margin-top: 20px;
  }
  h3 {
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  select {
    display: block;
    width: 195px;
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
    inputmode: "numeric";
  }

  button {
    border: none;
    border-radius: 5px;
    background-color: #088178;
    color: #fff;
    padding: 10px 15px;
    margin-top: 10px;
    margin-bottom: 15px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }

  h4 {
    font-size: 25px;
    margin-top: 20px;
  }

  span {
    font-size: 18px;
  }
`;
const Details = () => {
  const { ProductId } = useParams();
  // console.log(ProductId)
  const [ProDetails, setProDetails] = useState([]);

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    const newValue = event.target.value;
    setQuantity(newValue);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:3001/products/${ProductId}`)
      .then((response) => {
        setProDetails(response.data);
      });
  }, [ProductId]);

  return (
    <div className="container">
      <ProDetailsSection className="section-p1">
        <SingleProImage>
          <img
            src={
              ProDetails.images && ProDetails.images.length > 0
                ? ProDetails.images[0]
                : prdImg
            }
            alt="Main Product"
          />
          <div className="small-img-group">
            <div className="small-img-col">
              <img
                src={
                  ProDetails.images && ProDetails.images.length > 0
                    ? ProDetails.images[1]
                    : prdImg
                }
                alt="Main Product"
              />
            </div>
            <div className="small-img-col">
              <img
                src={
                  ProDetails.images && ProDetails.images.length > 0
                    ? ProDetails.images[2]
                    : prdImg
                }
                alt="Main Product"
              />
            </div>

            <div className="small-img-col">
              <img
                src={
                  ProDetails.images && ProDetails.images.length > 0
                    ? ProDetails.images[0]
                    : prdImg
                }
                alt="Main Product"
              />
            </div>
          </div>
        </SingleProImage>

        <SingleProDetails>
          <h3>{ProDetails.title}</h3>
          <h6>{ProDetails.category}</h6>
          <h2>
            $
            {ProDetails.price
              ? ProDetails.price.toFixed(2)
              : "Price not available"}
          </h2>
          <select id="size">
            <option>Select Size</option>
            <option>XL</option>
            <option>XXL</option>
            <option>Small</option>
            <option>Large</option>
            <option>Medium</option>
          </select>
          <input
            type="number"
            value={quantity}
            min="1"
            onChange={handleQuantityChange}
          />
          <button className="normal">Add To Cart</button>
          <h4>Product Details:</h4>
          <span>{ProDetails.description}</span>
        </SingleProDetails>
      </ProDetailsSection>

      <Reviews ProDetails={ProDetails}></Reviews>
    </div>
  );
};

export default Details;
