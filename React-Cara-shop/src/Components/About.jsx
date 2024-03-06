import styled from 'styled-components';
import React from 'react';
const Section = styled.section`
  background-image: url('assets/img/about/banner.png');
  width: 100%;
  height: 40vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 14px;
`;

const Text = styled.div`
  margin-top: 20px;
  font-family: 'Spartan', sans-serif;
  margin-bottom: 20px; /* Add some space between sections */
`;

const H2 = styled.h2`
  color: white;
  font-weight: 800;
`;

const P = styled.p`
  color: #fff;
  font-size: 10px;
  font-weight: 600;
`;

const AboutAppSection = styled.section`
  text-align: center;
`;

const Title = styled.h1`
  margin-bottom: 15px;

  a {
    text-decoration: none;
    color: #088178;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const VideoWrapper = styled.div`
  width: 70%;
  height: 100%;
  margin: 30px auto 30px auto;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;

const About = () => {
  return (
    <>
      <Section className=" container-fluid  ">
        <Text className="row justify-content-evenly">
          <H2>#KnowUs</H2>
          <P>Lorem ipsum dolor sit amet consectetur</P>
        </Text>
      </Section>

      <div className=" container-fluid my-4 ">
        <section className="row">
          <img
            className="col-md-6"
            src="assets/img/about/a6.jpg"
            alt="About Us"
          />
          <div className="col-md-6 d-flex align-items-center">
            <div>
              <h2>Who We Are?</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
                nisi et maiores quos in, accusamus possimus dolores. Nobis enim,
                nulla vel non placeat vitae qui corporis optio, porro assumenda
                adipisci.
              </p>
            </div>
          </div>
        </section>
      </div>

      <AboutAppSection>
        <Title>
          Download Our <a href="#">App</a>
        </Title>
        <VideoWrapper>
          <Video autoPlay muted loop src="assets/img/about/1.mp4"></Video>
        </VideoWrapper>
      </AboutAppSection>
    </>
  );
};

export default About;
