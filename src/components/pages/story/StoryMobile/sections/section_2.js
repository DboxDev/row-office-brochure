import React from 'react';
import ResponsiveImageMobile from 'components/images/ResponsiveImage';
import AnimatedSingleSquare from 'components/images/AnimatedSingleSquare';
import { brandArray } from 'data/home';
import Fade from 'react-reveal/Fade';

import {
  BlackSlideMobile,
  SlideMobile,
  BigText,
  Row,
  MedText,
  BrandRow,
  BrandItem
} from '../styles';

// import { brandArray } from 'data/home';
import { communityRotatingImages } from 'data/rotatingImages';

const generateBrandRow = () => {
  return brandArray.map((brand, idx) => {
    return (
      <BrandItem key={`brand-row-${idx}-item-${idx}`}>
        <img src={brand.logo} alt={`${brand.alt} logo`} className="logo" />
        <ResponsiveImageMobile
          srcPath={brand.background}
          imgAlt={brand.alt}
          imgClass="background"
        />
      </BrandItem>
    );
  });
};

const SectionOneMobile = () => {
  return (
    <React.Fragment>
      <BlackSlideMobile>
        <Fade right>
          <div className="flex-column-center">
            <h1 className="quote">
              "In Downtown Los Angeles, ROW DTLA has continued to take shape, transforming 32 acres
              into an all-encompassing iconic destination. It is a growing collective of globally
              recognized shops, restaurants and innovative offices that are spread over six
              buildings to create their own unique L.A. environment."
            </h1>
            <span className="credit">LA MAGAZINE</span>
          </div>
        </Fade>
      </BlackSlideMobile>
      <Fade>
        <SlideMobile paddingBottom="5em">
          <ResponsiveImageMobile srcPath="/images/pages/home/section_2/row_office_section2_1" />
          <Row>
            <BigText className="black-500">
              A vibrant district that pushes the boundaries between work, culture and play
            </BigText>
          </Row>
        </SlideMobile>
      </Fade>
      <BrandRow>{generateBrandRow()}</BrandRow>
      <SlideMobile>
        <Fade>
          <ResponsiveImageMobile srcPath="/images/pages/home/section_2/row_office_section2_2" />
        </Fade>
        <Fade>
          <Row paddingBottom="0">
            <BigText className="grey-400">
              Elevate your routine without ever leaving. Workplaces, restaurants, fitness options,
              and salons are all within reach
            </BigText>
          </Row>
        </Fade>
      </SlideMobile>
      <SlideMobile paddingBottom="5em">
        <AnimatedSingleSquare imgArray={communityRotatingImages} active />
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
    </React.Fragment>
  );
};

export default SectionOneMobile;
