import React from 'react';

import RotatingGrid from 'components/images/RotatingGrid';
import ResponsiveImage from 'components/images/ResponsiveImage';
import {
  BrandItem,
  BrandRow,
  BlackSlide,
  BigText,
  CaptionText,
  MedText,
  PhotoRow,
  Row,
  ScrollColumn
} from './styles';

import { brandGrid } from 'data/home';
import { communityGrid } from 'data/rotatingImages';

const generateBrandGrid = () => {
  return brandGrid.map((row, rowIdx) => {
    return (
      <BrandRow key={`brand-row-${rowIdx}`}>
        {row.map((el, itemIdx) => {
          return (
            <BrandItem key={`brand-row-${rowIdx}-item-${itemIdx}`}>
              <img src={el.logo} alt={`${el.alt} logo`} className="logo" />
              <ResponsiveImage srcPath={el.background} imgAlt={el.alt} imgClass="background" />
            </BrandItem>
          );
        })}
      </BrandRow>
    );
  });
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
      <ScrollColumn className="swiper-slide" paddingLeft="160px" revealed={revealed >= 8}>
        <PhotoRow>
          <ResponsiveImage srcPath="/images/home/section_2/row_office_section2_1" imgAlt="test" />
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
      </ScrollColumn>
      <ScrollColumn
        className="swiper-slide"
        paddingRight="0"
        paddingTop="140px"
        paddingBottom="120px"
        revealed={revealed >= 9}
        spaceBetween
      >
        {generateBrandGrid()}
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" revealed={revealed >= 10}>
        <ResponsiveImage srcPath="/images/home/section_2/row_office_section2_2" imgAlt="test" />
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" revealed={revealed >= 11}>
        <Row height="55%" />
        <Row height="45%">
          <BigText className="grey-400">
            Elevate your routine without
            <br /> ever leaving. Workplaces,
            <br /> restaurants, fitness options,
            <br /> and salons are all within reach
          </BigText>
        </Row>
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" revealed={revealed >= 12}>
        <RotatingGrid imgGrid={communityGrid} carouselActive={revealed >= 13} />
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" revealed={revealed >= 13}>
        <Row height="55%" />
        <Row height="45%">
          <MedText>
            ROW DTLA brings people
            <br /> together through
            <br /> workshops, activated
            <br /> events and social
            <br /> gatherings that pave the
            <br /> way for a community that
            <br /> continues to grow and
            <br /> adapt day by day in a truly
            <br /> meaningful way
          </MedText>
        </Row>
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" paddingRight="160px" revealed={revealed >= 14}>
        <ResponsiveImage
          srcPath="/images/home/section_2/row_office_section2_3"
          imgAlt="test"
          height="95%"
        />
        <CaptionText>AN INTERCHANGEABLE WORK AND PLAY DYNAMIC </CaptionText>
      </ScrollColumn>
    </React.Fragment>
  );
};

export default SectionTwo;
