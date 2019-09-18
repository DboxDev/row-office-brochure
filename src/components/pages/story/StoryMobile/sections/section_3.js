import React from 'react';
import ReactPlayer from 'react-player';
import ResponsiveImageMobile from 'components/images/ResponsiveImage';
import AnimatedSingleSquare from 'components/images/AnimatedSingleSquare';
import Fade from 'react-reveal/Fade';

import {
  BlackSlideMobile,
  SlideMobile,
  BigText,
  Row,
  MedText,
  PlayerWrapper,
  FactRow,
  Fact,
  PressRow,
  PressItem
} from '../styles';

import { keyFacts, pressLogos } from 'data/home';
import { workspacesRotatingImages } from 'data/rotatingImages';

const generatePressGrid = () => {
  const rows = [];
  let cols = [];

  pressLogos.forEach((el, idx) => {
    cols.push(
      <PressItem href={el.href} target="_blank" key={`row-${idx}-el-${idx}`}>
        <img src={el.logo} alt={`${el.alt} logo`} className="press-logo" />
      </PressItem>
    );

    if ((idx + 1) % 3 === 0) {
      rows.push(<PressRow key={`fact-${idx}`}>{cols}</PressRow>);
      cols = [];
    }
  });

  return rows;
};

const generateFacts = () => {
  const rows = [];
  let cols = [];
  keyFacts.forEach((el, idx) => {
    cols.push(
      <Fact key={`fact-${idx}`} index={idx + 1}>
        <p className="fact-index">{idx + 1}</p>
        <p className="fact-body">{el}</p>
      </Fact>
    );
    if ((idx + 1) % 2 === 0) {
      rows.push(<FactRow key={`fact-${idx}`}>{cols}</FactRow>);
      cols = [];
    }
  });
  return rows;
};

const SectionThreeMobile = () => {
  return (
    <React.Fragment>
      <BlackSlideMobile>
        <Fade right>
          <h1 className="quote">
            "The thing that’s unique about the ROW is that it’s this incredible modern space, but
            it’s also really historied. The buildings are over 100 years old and so when you’re
            walking through campus, there’s not really many places in LA where you can really feel
            like you’re a part of LA’s history."
          </h1>
          <span className="credit">RACHEL MADDEN, WC+A</span>
        </Fade>
      </BlackSlideMobile>
      <Fade>
        <SlideMobile>
          <ResponsiveImageMobile srcPath="/images/pages/home/section_3/row_office_section3_1" />
          <Row paddingBottom="0">
            <BigText className="black-500">
              Our non-traditional lives need a non-traditional workplace
            </BigText>
          </Row>
        </SlideMobile>
      </Fade>
      <SlideMobile>
        <AnimatedSingleSquare imgArray={workspacesRotatingImages} active />
        <Fade>
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
        </Fade>
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
        <Fade>
          <MedText marginTop>
            Where the workplace extends
            <br /> beyond your own office. Indoor
            <br /> and outdoor communal spaces,
            <br /> inviting lobbies, roof decks and
            <br /> more provide for a flexible and
            <br /> productive work environment
          </MedText>
        </Fade>
        <Fade>
          <Row>
            <ResponsiveImageMobile srcPath="/images/pages/home/section_3/row_office_section3_5" />
          </Row>
        </Fade>
      </SlideMobile>
      <SlideMobile>
        <BigText className="black-500" style={{ margin: '1em 0' }}>
          Key facts
        </BigText>
        {generateFacts()}
      </SlideMobile>
      <SlideMobile>
        <BigText className="black-500" style={{ margin: '1em 0' }}>
          In the press
        </BigText>
        {generatePressGrid()}
      </SlideMobile>
      <SlideMobile>
        <Fade>
          <ResponsiveImageMobile srcPath="/images/pages/home/section_3/row_office_section3_8" />
          <Row>
            <BigText className="black-500">ROW DTLA. Work life has never looked better.</BigText>
          </Row>
        </Fade>
      </SlideMobile>
    </React.Fragment>
  );
};

export default SectionThreeMobile;
