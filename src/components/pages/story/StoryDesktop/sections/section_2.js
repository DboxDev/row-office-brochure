import React from 'react';

import RotatingGrid from 'components/images/RotatingGrid';
import ResponsiveImage from 'components/images/ResponsiveImage';
import {
  BrandItem,
  BrandRow,
  BlackSlide,
  BigText,
  MedText,
  PhotoRow,
  Row,
  ScrollSection,
  SectionCaption
} from '../styles';

import { brandArray } from 'data/home';
import { communityGrid } from 'data/rotatingImages';

const generateBrandArray = () => {
  const rows = [];
  let cols = [];

  brandArray.forEach((brand, idx) => {
    cols.push(
      <BrandItem key={`brand-item-${idx}`}>
        <img src={brand.logo} alt={`${brand.alt} logo`} className="logo" />
        <ResponsiveImage srcPath={brand.background} imgAlt={brand.alt} imgClass="background" />
      </BrandItem>
    );

    if ((idx + 1) % 3 === 0) {
      rows.push(<BrandRow key={`brand-row-${rows.length}`}>{cols}</BrandRow>);
      cols = [];
    }
  });

  return rows;
};

const SectionTwo = ({ revealed }) => {
  return (
    <React.Fragment>
      <BlackSlide className="swiper-slide" revealed={revealed >= 7}>
        <h1 className="quote">
          "In Downtown Los Angeles, ROW DTLA has continued to take shape, transforming 32 acres into
          an all-encompassing iconic destination. It is a growing collective of globally recognized
          shops, restaurants and innovative offices that are spread over six buildings to create
          their own unique L.A. environment."
        </h1>
        <span className="credit">LA MAGAZINE</span>
      </BlackSlide>
      <ScrollSection className="swiper-slide" paddingLeft="160px" revealed={revealed >= 8}>
        <PhotoRow>
          <ResponsiveImage
            srcPath="/images/pages/home/section_2/row_office_section2_1"
            imgAlt="test"
          />
        </PhotoRow>
        <Row height="45%">
          <BigText className="black-500">
            A vibrant district that
            <br /> pushes the boundaries
            <br /> between work, culture
            <br />
            and play
          </BigText>
        </Row>
      </ScrollSection>
      <ScrollSection
        className="swiper-slide"
        paddingRight="0"
        paddingBottom="120px"
        revealed={revealed >= 9}
        spaceBetween
      >
        {generateBrandArray()}
        <SectionCaption style={{ marginLeft: '5vw' }}>Featured Tenants</SectionCaption>
      </ScrollSection>
      <ScrollSection className="swiper-slide" revealed={revealed >= 10}>
        <ResponsiveImage
          srcPath="/images/pages/home/section_2/row_office_section2_2"
          imgAlt="test"
        />
      </ScrollSection>
      <ScrollSection className="swiper-slide" revealed={revealed >= 11}>
        <Row height="55%" />
        <Row height="45%">
          <BigText className="grey-400">
            Elevate your routine without
            <br /> ever leaving. Workplaces,
            <br /> restaurants, fitness options,
            <br /> and salons are all within reach
          </BigText>
        </Row>
      </ScrollSection>
      <ScrollSection className="swiper-slide" paddingRight="0" revealed={revealed >= 12}>
        <RotatingGrid imgGrid={communityGrid} />
      </ScrollSection>
      <ScrollSection className="swiper-slide" paddingRight="160px" revealed={revealed >= 13}>
        <Row height="55%" />
        <Row height="45%">
          <MedText>
            ROW DTLA brings people together
            <br /> through workshops, activated
            <br /> events and social gatherings that
            <br /> pave the way for a community that
            <br /> continues to grow and adapt day by
            <br /> day in a truly meaningful way
          </MedText>
        </Row>
      </ScrollSection>
    </React.Fragment>
  );
};

export default SectionTwo;
