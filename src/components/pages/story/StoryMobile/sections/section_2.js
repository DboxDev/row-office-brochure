import React from 'react';
import ResponsiveImageMobile from 'components/images/ResponsiveImage';
import AnimatedSingleSquare from 'components/images/AnimatedSingleSquare';

import { BlackSlideMobile, SlideMobile, BigText, Row, MedText } from '../styles';

import { communityRotatingImages } from 'data/rotatingImages';

const SectionOneMobile = () => {
  return (
    <React.Fragment>
      <BlackSlideMobile>
        <h1 className="quote">
          "In Downtown Los Angeles, ROW DTLA has continued to take shape, transforming 32 acres into
          an all-encompassing iconic destination. It is a growing collective of globally recognized
          shops, restaurants and innovative offices that are spread over six buildings to create
          their own unique L.A. environment."
        </h1>
        <span className="credit">LA MAGAZINE</span>
      </BlackSlideMobile>
      <SlideMobile>
        <ResponsiveImageMobile srcPath="/images/pages/home/section_2/row_office_section2_1" />
        <Row paddingBottom="0">
          <BigText className="black-500">
            A vibrant district that pushes the boundaries between work, culture and play
          </BigText>
        </Row>
      </SlideMobile>
      <SlideMobile>
        <ResponsiveImageMobile srcPath="/images/pages/home/section_2/row_office_section2_2" />
        <Row paddingBottom="0">
          <BigText className="grey-400">
            Elevate your routine without ever leaving. Workplaces, restaurants, fitness options, and
            salons are all within reach
          </BigText>
        </Row>
      </SlideMobile>
      <SlideMobile>
        <AnimatedSingleSquare imgArray={communityRotatingImages} active />
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
    </React.Fragment>
  );
};

export default SectionOneMobile;
