import React from 'react';

import RotatingGrid from 'components/images/RotatingGrid';
import ResponsiveImage from 'components/images/ResponsiveImage';
import { ScrollColumn, BlackSlide, BigText, MedText, PhotoRow, BrandRow, BrandItem, CaptionText } from './styles';

import { brandGrid } from 'data/home';
import { welcomeGrid } from 'data/rotatingImages';

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
      <BlackSlide className="swiper-slide" revealed={revealed >= 8}>
        <h1 className="quote">
          "In Downtown Los Angeles, ROW DTLA has continued to take shape, transforming 32 acres into an all-encompassing
          iconic destination. It is a growing collective of globally recognized shops, restaurants and innovative
          offices that are spread over six buildings to create their own unique L.A. environment."
        </h1>
        <span className="credit">LA MAGAZINE</span>
      </BlackSlide>
      <ScrollColumn className="swiper-slide" revealed={revealed >= 9}>
        <PhotoRow>
          <ResponsiveImage srcPath="/images/home/section_2/row_1" imgAlt="test" />
        </PhotoRow>
        <BigText intro>
          A vibrant district that
          <br /> pushes the boundaries
          <br /> between work, culture
          <br />
          and play
        </BigText>
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" revealed={revealed >= 10} space-between>
        {generateBrandGrid()}
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" paddingLeft="100px" paddingRight="100px" revealed={revealed >= 11}>
        <ResponsiveImage srcPath="/images/home/section_2/row_2" imgAlt="test" />
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" paddingLeft="100px" paddingRight="100px" revealed={revealed >= 12}>
        <BigText marginTop>
          Easily elevate your routine
          <br /> essentials with gyms, salons,
          <br /> workplaces, and restaurants
          <br /> all within reach
        </BigText>
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" paddingLeft="100px" paddingRight="100px" revealed={revealed >= 13}>
        <RotatingGrid imgGrid={welcomeGrid} carouselActive={revealed >= 13} />
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" paddingLeft="100px" paddingRight="100px" revealed={revealed >= 14}>
        <MedText marginTop>
          ROW DTLA strives to
          <br /> bring people together,
          <br /> through workshops,
          <br />
          activated events and social
          <br /> gatherings that pave the
          <br /> way for a community that
          <br /> continues to grow, adapt,
          <br /> and change day by day in a<br />
          truly meaningful way
        </MedText>
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" revealed={revealed >= 14}>
        <ResponsiveImage srcPath="/images/home/section_2/row_7" imgAlt="test" height="95%" />
        <CaptionText>AN INTERCHANGEABLE WORK AND PLAY DYNAMIC </CaptionText>
      </ScrollColumn>
    </React.Fragment>
  );
};

export default SectionTwo;
