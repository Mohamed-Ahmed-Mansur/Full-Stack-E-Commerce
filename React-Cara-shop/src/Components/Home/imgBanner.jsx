import React from 'react';
import styled from 'styled-components';

const SmBannerSection = styled.section`
  padding: 20px;
`;

const BannerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-image: url('assets/img/banner/b17.jpg');
  height: 300px;
  background-size: cover;
  background-position: center;
  padding: 30px;
  margin-bottom: 20px;
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
  padding: 10px 20px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s ease;
`;

const ImgBanner = () => {
  return (
    <SmBannerSection className='container'>
      <div className='row'>
        <div className='col-lg-6 col-md-6 col-sm-12'>
          <BannerBox>
            <BannerH4>Crazy Deals</BannerH4>
            <BannerH2>Buy 1 Get 1 Free</BannerH2>
            <BannerSpan>The best classic dress is on sale at Cara</BannerSpan>
            <HoverButton>Learn More</HoverButton>
          </BannerBox>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-12'>
          <BannerBox2>
            <BannerH4>Spring/Summer</BannerH4>
            <BannerH2>Upcoming Season</BannerH2>
            <BannerSpan>The best classic dress is on sale at Cara</BannerSpan>
            <HoverButton>Collection</HoverButton>
          </BannerBox2>
        </div>
      </div>
    </SmBannerSection>
  );
};

export default ImgBanner;
