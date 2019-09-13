import React from 'react';
import ReactPlayer from 'react-player';
import ResponsiveImageMobile from 'components/images/ResponsiveImage';
import AnimatedSingleSquare from 'components/images/AnimatedSingleSquare';

import { BlackSlideMobile, SlideMobile, BigText, Row, MedText, PlayerWrapper } from '../styles';

import { workspacesRotatingImages } from 'data/rotatingImages';

const SectionThreeMobile = () => {
  return (
    <React.Fragment>
      <BlackSlideMobile>
        <h1 className="quote">
          "The thing that’s unique about the ROW is that it’s this incredible modern space, but it’s
          also really historied. The buildings are over 100 years old and so when you’re walking
          through campus, there’s not really many places in LA where you can really feel like you’re
          a part of LA’s history."
        </h1>
        <span className="credit">RACHEL MADDEN, WC+A</span>
      </BlackSlideMobile>
      <SlideMobile>
        <ResponsiveImageMobile srcPath="/images/pages/home/section_3/row_office_section3_1" />
        <Row paddingBottom="0">
          <BigText className="black-500">
            Our non-traditional lives need a non-traditional workplace
          </BigText>
        </Row>
      </SlideMobile>
      <SlideMobile>
        <AnimatedSingleSquare imgArray={workspacesRotatingImages} active />
        <Row>
          <MedText marginTop>
            ROW DTLA brings people
            <br /> together through workshops,
            <br /> activated events and social
            <br /> gatherings that pave the way for
            <br /> a community that continues to
            <br /> grow and adapt day by day in a
            <br /> truly meaningful way
          </MedText>
        </Row>
      </SlideMobile>
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
      <SlideMobile>
        <MedText marginTop>
          Where the workplace extends
          <br /> beyond your own office. Indoor
          <br /> and outdoor communal spaces,
          <br /> inviting lobbies, roof decks and
          <br /> more provide for a flexible and
          <br /> productive work environment
        </MedText>
        <Row>
          <ResponsiveImageMobile srcPath="/images/pages/home/section_3/row_office_section3_5" />
        </Row>
      </SlideMobile>
      <SlideMobile>
        <ResponsiveImageMobile srcPath="/images/pages/home/section_3/row_office_section3_8" />
        <Row>
          <BigText className="black-500">ROW DTLA. Work life has never looked better.</BigText>
        </Row>
      </SlideMobile>
    </React.Fragment>
  );
};

export default SectionThreeMobile;
