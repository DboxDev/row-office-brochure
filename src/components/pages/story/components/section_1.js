import React from 'react';
import ReactPlayer from 'react-player';

import RotatingGrid from 'components/images/RotatingGrid';
import ResponsiveImage from 'components/images/ResponsiveImage';
import { BlackSlide, BigText, MedText, PhotoRow, PlayerWrapper, Row, ScrollColumn } from './styles';

import { welcomeGrid } from 'data/rotatingImages';

const SectionOne = ({ revealed }) => {
  return (
    <React.Fragment>
      <BlackSlide className="swiper-slide" revealed>
        <h1 className="quote">
          ROW DTLA has shown Los Angeles what happens when you redefine the concept of workplace,
          that if you celebrate innovation, collaboration and community, you get something very
          special, that just keeps getting better.
        </h1>
        <span className="scroll-reminder">
          <p>SCROLL</p>
        </span>
      </BlackSlide>
      <ScrollColumn className="swiper-slide" paddingLeft="160px" revealed={revealed >= 0}>
        <PhotoRow>
          <ResponsiveImage srcPath="/images/home/section_1/row_office_section1_1" imgAlt="test" />
        </PhotoRow>
        <Row height="45%">
          <BigText className="black-500">
            Welcome to
            <br />
            ROW DTLA
          </BigText>
        </Row>
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" revealed={revealed >= 1}>
        <PhotoRow>
          <ResponsiveImage srcPath="/images/home/section_1/row_office_section1_2" imgAlt="test" />
          <ResponsiveImage srcPath="/images/home/section_1/row_office_section1_3" imgAlt="test" />
        </PhotoRow>
        <Row height="45%">
          <BigText className="grey-400">
            A 32-acre district with a 100
            <br /> year old history marks the
            <br /> beginning of LA’s future as a
            <br /> new creative and cultural hub
          </BigText>
        </Row>
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" revealed={revealed >= 2}>
        <Row height="55%" />
        <Row height="45%">
          <MedText marginTop>
            Contemporary offices, bespoke
            <br /> boutiques, and artisanal eateries
            <br />
            catered to the entrepreneurial
            <br /> visionaries, style icons, and food
            <br />
            connoisseurs of Los Angeles
          </MedText>
        </Row>
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" revealed={revealed >= 3}>
        <RotatingGrid imgGrid={welcomeGrid} carouselActive={revealed >= 3} />
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" revealed={revealed >= 4}>
        <PlayerWrapper>
          <ReactPlayer
            className="react-player"
            width="100%"
            height="100%"
            url="https://vimeo.com/355557064"
            playing
            light="/images/video/rowdtla_video_thumbnail_general.jpg"
          />
        </PlayerWrapper>
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" revealed={revealed >= 5}>
        <PhotoRow>
          <ResponsiveImage srcPath="/images/home/section_1/row_office_section1_4" imgAlt="test" />
        </PhotoRow>
        <Row height="45%">
          <MedText>
            Authentic experiences in a
            <br /> district charged with innovation,
            <br /> collaboration and community.
            <br /> Curated down to every last detail,
            <br /> ROW DTLA's ever- changing
            <br /> environment fosters creativity in
            <br /> every aspect
          </MedText>
        </Row>
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" paddingRight="160px" revealed={revealed >= 6}>
        <ResponsiveImage srcPath="/images/home/section_1/row_office_section1_5" imgAlt="test" />
      </ScrollColumn>
    </React.Fragment>
  );
};

export default SectionOne;
