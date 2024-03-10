import React, { useRef, useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

const countUp = (start, end, duration, setValue) => {
  const range = end - start;
  const increment = end > start ? 1 : -1;
  const stepTime = Math.abs(Math.floor(duration / range));
  let current = start;
  const timer = setInterval(() => {
    current += increment;
    setValue(current);
    if (current === end) {
      clearInterval(timer);
    }
  }, stepTime);
};

const changeColors = (setDarkMode, setTextColor) => {
  setTimeout(() => {
    setDarkMode(true);
    setTextColor('#088178');
  }, 5000); // Start changing colors after 5 seconds
};

const bounce = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
`;

const Container = styled.div`
  width: 100%;
  height: 10rem;
  color: ${({ textColor }) => textColor};
  display: flex;
  transition: color 2s ease;
`;

const SubContainer = styled.div`
  width: 33.33%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AnimatedNumber = styled.div`
  font-size: calc(0.8rem + 1.5vw); /* Base font size with additional scaling based on viewport width */
  font-weight: bold;
  ${({ isVisible }) =>
    isVisible &&
    css`
      animation: ${bounce} 2s ease-in-out;
    `}
    @media (max-width: 648px) {
      display: none;
    }
`;

const Statistics = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [ , setIsDark] = useState(false);
  const [textColor, setTextColor] = useState('#8ba9c0');
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '-100px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
  }, []);

  useEffect(() => {
    if (isVisible) {
      countUp(0, 2000, 5000, setValue1);
      countUp(0, 1500, 5000, setValue2);
      countUp(0, 1000, 5000, setValue3);
      changeColors(setIsDark, setTextColor);
    }
  }, [isVisible]);

  return (
    <div ref={containerRef}>
      <Container textColor={textColor}>
        <SubContainer>
          <AnimatedNumber isVisible={isVisible}>+{value1}&nbsp;<b>Oreders</b></AnimatedNumber>
        </SubContainer>
        <SubContainer>
          <AnimatedNumber isVisible={isVisible}>+{value2}&nbsp;<b>Customers</b></AnimatedNumber>
        </SubContainer>
        <SubContainer>
          <AnimatedNumber isVisible={isVisible}>+{value3}&nbsp;<b>Sellers</b></AnimatedNumber>
        </SubContainer>
      </Container>
    </div>
  );
};

export default Statistics;
