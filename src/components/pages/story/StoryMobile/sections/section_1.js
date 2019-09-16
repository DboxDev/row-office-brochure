import React from 'react';
import ReactPlayer from 'react-player';
import ResponsiveImageMobile from 'components/images/ResponsiveImage';
import AnimatedSingleSquare from 'components/images/AnimatedSingleSquare';
import Fade from 'react-reveal/Fade';

import { BlackSlideMobile, SlideMobile, BigText, Row, MedText, PlayerWrapper } from '../styles';

import { welcomeRotatingImages } from 'data/rotatingImages';

const SectionOneMobile = () => {
  return (
    <React.Fragment>
      <BlackSlideMobile>
        <h1 className="quote">
          ROW DTLA has shown Los Angeles what happens when you redefine the concept of workplace,
          that if you celebrate innovation, collaboration and community, you get something very
          special, that just keeps getting better.
        </h1>
        <span className="scroll-reminder">
          <p>SCROLL</p>
        </span>
      </BlackSlideMobile>
      <Fade>
        <SlideMobile>
          <ResponsiveImageMobile srcPath="/images/pages/home/section_1/row_office_section1_1" />
          <Row paddingBottom="0">
            <BigText className="black-500">
              Welcome to
              <br />
              ROW DTLA
            </BigText>
          </Row>
        </SlideMobile>
      </Fade>
      <SlideMobile>
        <Fade>
          <Row>
            <ResponsiveImageMobile srcPath="/images/pages/home/section_1/row_office_section1_2" />
          </Row>
        </Fade>
        <Fade>
          <Row>
            <ResponsiveImageMobile srcPath="/images/pages/home/section_1/row_office_section1_3" />
          </Row>
        </Fade>
        <Fade>
          <Row paddingBottom="0">
            <BigText className="grey-400">
              A 32-acre district with a 100 year old history marks the beginning of LA’s future as a
              new creative and cultural hub
            </BigText>
          </Row>
        </Fade>
      </SlideMobile>
      <SlideMobile>
        <AnimatedSingleSquare imgArray={welcomeRotatingImages} active />
        <Fade>
          <Row paddingBottom="0">
            <MedText marginTop>
              Contemporary offices, bespoke
              <br /> boutiques, and artisanal eateries
              <br /> catered to the entrepreneurial
              <br /> visionaries, style icons, and food
              <br /> connoisseurs of Los Angeles
            </MedText>
          </Row>
        </Fade>
      </SlideMobile>
      <Fade>
        <SlideMobile>
          <PlayerWrapper>
            <ReactPlayer
              className="react-player"
              width="100%"
              height="100%"
              url="https://vimeo.com/357861717"
              playing
              light="/video/player/rowdtla_video_preview_general.jpg"
            />
          </PlayerWrapper>
        </SlideMobile>
      </Fade>
      <SlideMobile>
        <Fade>
          <MedText>
            Authentic experiences in a
            <br /> district charged with innovation,
            <br /> collaboration and community.
            <br /> Curated down to every last detail,
            <br /> ROW DTLA's ever-changing
            <br /> environment fosters creativity in
            <br /> every aspect
          </MedText>
        </Fade>
        <Fade>
          <Row>
            <ResponsiveImageMobile srcPath="/images/pages/home/section_1/row_office_section1_5" />
          </Row>
        </Fade>
      </SlideMobile>
    </React.Fragment>
  );
};

export default SectionOneMobile;
