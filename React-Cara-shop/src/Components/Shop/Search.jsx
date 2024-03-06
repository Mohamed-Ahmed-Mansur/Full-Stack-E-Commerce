import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../Card';

export default function Search({ products }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(null);

  const getAllData = async () => {
    setData(products);
    setFilteredData(products);
  };

  useEffect(() => {
    getAllData();
  }, [products]);

  function search(e) {
    let searchVal = e.target.value;
    let searchResult;

    searchResult = data.filter((el) => {
      return el.title.toLowerCase().includes(searchVal.toLowerCase());
    });

    setFilteredData(searchResult);
  }

  return (
    <div id="search">
      <SearchContainer>
        <SearchIcon className="fa-solid fa-magnifying-glass"></SearchIcon>
        <SearchInput
          type="text"
          placeholder="Search for Category..."
          onChange={search}
        />
      </SearchContainer>

      <div className="row g-5">
        {filteredData?.map((prd, i) => {
          return (
            <div key={i} className="col-lg-4 col-md-6">
              <Card product={prd}></Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const SearchContainer = styled.div`
  // max-width: 600px;
  position: relative;
  margin-bottom: 1.6rem;
`;

const SearchInput = styled.input`
  padding: 13px 14px 12px 40px;
  border: 1px solid #494949;
  border-radius: 0.8rem;
  // outline: none;
  color: #1c1c1c;
  width: 100%;
  font-size: 1.2rem;

  &::placeholder {
    color: #1c1c1c;
  }
`;

const SearchIcon = styled.i`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: #1c1c1c;
  z-index: 1;
`;
