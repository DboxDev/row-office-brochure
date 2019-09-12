import React from 'react';
import ResponsiveImageMobile from 'components/images/ResponsiveImage';
import AnimatedSingleSquare from 'components/images/AnimatedSingleSquare';

import { BlackSlideMobile, SlideMobile, BigText, Row, MedText } from '../styles';

import { animatedSingleSquare1 } from 'data/rotatingImages';

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
      <SlideMobile>
        <ResponsiveImageMobile srcPath="/images/pages/home/section_1/row_office_section1_1" />
        <Row>
          <BigText className="black-500">
            Welcome to
            <br />
            ROW DTLA
          </BigText>
        </Row>
      </SlideMobile>
      <SlideMobile>
        <Row>
          <ResponsiveImageMobile srcPath="/images/pages/home/section_1/row_office_section1_2" />
        </Row>
        <Row>
          <ResponsiveImageMobile srcPath="/images/pages/home/section_1/row_office_section1_3" />
        </Row>
        <Row>
          <BigText className="grey-400">
            A 32-acre district with a 100 year old history marks the beginning of LA’s future as a
            new creative and cultural hub
          </BigText>
        </Row>
      </SlideMobile>
      <SlideMobile>
        <AnimatedSingleSquare imgArray={animatedSingleSquare1} active />
        <Row>
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
      </SlideMobile>
    </React.Fragment>
  );
};

export default SectionOneMobile;
