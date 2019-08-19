import React from 'react';

import RotatingGrid from 'components/images/RotatingGrid';
import ResponsiveImage from 'components/images/ResponsiveImage';
import { ScrollColumn, BlackSlide, BigText, MedText, PhotoRow } from './styles';

import { welcomeGrid } from 'data/rotatingImages';

const SectionOne = ({ revealed }) => {
  return (
    <React.Fragment>
      <BlackSlide className="swiper-slide" revealed>
        <h1 className="quote">
          ROW DTLA has shown Los Angeles what happens when you redefine the concept of workplace, that if you celebrate
          innovation, collaboration and community, you get something very special, that just keeps getting better.
        </h1>
        <span className="scroll-reminder">
          <p>SCROLL</p>
        </span>
      </BlackSlide>
      <ScrollColumn className="swiper-slide" leftRightPadding="200px" revealed={revealed >= 1}>
        <PhotoRow>
          <ResponsiveImage srcPath="/images/home/section_1/row_1" imgAlt="test" />
        </PhotoRow>
        <BigText intro>
          Welcome to
          <br />
          ROW DTLA
        </BigText>
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" leftRightPadding="100px" revealed={revealed >= 2}>
        <PhotoRow>
          <ResponsiveImage srcPath="/images/home/section_1/row_2" imgAlt="test" />
          <ResponsiveImage srcPath="/images/home/section_1/row_3" imgAlt="test" />
        </PhotoRow>
        <BigText>
          100 years of history and
          <br />
          32 acres of space mark the
          <br /> beginning of LA’s future as
          <br />a creative and cultural hub
        </BigText>
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" revealed={revealed >= 3}>
        <MedText margin-top>
          Contemporary offices, bespoke
          <br /> boutiques, and artisanal eateries
          <br />
          catered to the entrepreneurial
          <br /> visionaries, style icons, and food
          <br />
          connoisseurs of Los Angeles
        </MedText>
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" revealed={revealed >= 4}>
        <RotatingGrid imgGrid={welcomeGrid} carouselActive={revealed >= 4} />
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" revealed={revealed >= 5}>
        <ResponsiveImage srcPath="/images/home/section_1/row_1" imgAlt="test" />
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" revealed={revealed >= 6}>
        <PhotoRow>
          <ResponsiveImage srcPath="/images/home/section_1/row_8" imgAlt="test" />
        </PhotoRow>
        <MedText margin-top>
          Authentic experiences in a district
          <br /> charged with innovation, collaboration
          <br /> and community. Curated down to
          <br /> every last detail, ROW DTLA's ever-
          <br />
          changing environment fosters
          <br /> creativity in every aspect
        </MedText>
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" revealed={revealed >= 7}>
        <ResponsiveImage srcPath="/images/home/section_1/row_9" imgAlt="test" />
      </ScrollColumn>
    </React.Fragment>
  );
};

export default SectionOne;
