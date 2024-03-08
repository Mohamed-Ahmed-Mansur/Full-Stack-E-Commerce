import React, { useState } from 'react';
import styled from 'styled-components';

const SmBannerSection = styled.section`

  padding: 20px;
  font-family: 'Spartan', sans-serif;
  font-size: .9rem;

`;

const BannerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-image: url('assets/img/banner/b17.jpg');
//   min-width: 580px;
//   width: 49%;
//   height: 50vh;
  height: 300px;
  
  background-size: cover;
  background-position: center;
  padding: 30px;
  margin-bottom: 20px;

  @media (max-width: 1268px) {
    width: 100%;
  }
`;

const BannerBox2 = styled(BannerBox)`
  background-image: url('assets/img/banner/b10.jpg');
`;

const BannerH4 = styled.h4`
  color: #fff;
  font-size: 20px;
  font-weight: 300;
`;

const BannerH2 = styled.h2`
  color: #fff;
  font-size: 28px;
  font-weight: 800;
`;

const BannerSpan = styled.span`
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  padding-bottom: 15px;
`;

const HoverButton = styled.button`
  background: ${(props) => (props.hovered ? '#088178' : 'transparent')};
  border: 1px solid ${(props) => (props.hovered ? '#088178' : '#fff')};
  color: #fff;
  padding:7px;
  font-weight:600;
  padding-left:15px;
  padding-right:15px;
  cursor: pointer;
  outline: none;
  transition: 0.6s;
`;

const ImgBanner = () => {
  const [isHovered1, setHovered1] = useState(false);
  const [isHovered2, setHovered2] = useState(false);

  return (
    <div className='container'>
    <SmBannerSection  className=' row '>
      <BannerBox className='col-lg-6 col-xsm-12 '>
        <BannerH4>crazy deals</BannerH4>
        <BannerH2>buy 1 get 1 free</BannerH2>
        <BannerSpan>The best classic dress is on sale at cara</BannerSpan>
        <HoverButton
          className="white"
          onMouseEnter={() => setHovered1(true)}
          onMouseLeave={() => setHovered1(false)}
          hovered={isHovered1} //props
        >
          Learn More
        </HoverButton>
      </BannerBox>
      <BannerBox2 className='col-lg-6 col-xsm-12'>
        <BannerH4>spring/summer</BannerH4>
        <BannerH2>upcoming season</BannerH2>
        <BannerSpan>The best classic dress is on sale at cara</BannerSpan>
        <HoverButton
          className="white"
          onMouseEnter={() => setHovered2(true)}
          onMouseLeave={() => setHovered2(false)}
          hovered={isHovered2}
        >
          Collection
        </HoverButton>
      </BannerBox2>
    </SmBannerSection>
    </div>
  );
};

export default ImgBanner;

