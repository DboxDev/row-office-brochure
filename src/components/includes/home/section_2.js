import React from 'react';

import { brandGrid } from '../../../data/home';
import ResponsiveImage from '../../utils/responsive-image';
import {
  ScrollColumn,
  BlackSlide,
  BigText,
  MedText,
  PhotoRow,
  BrandRow,
  BrandItem
} from './home_components';

const generateBrandGrid = () => {
  return brandGrid.map(row => {
    return (
      <BrandRow>
        {row.map(el => {
          return (
            <BrandItem>
              <img src={el.logo} alt={`${el.alt} logo`} className="logo" />
              <ResponsiveImage
                srcPath={el.background}
                imgAlt={el.alt}
                imgClass="background"
              />
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
        <p className="quote">
          "In Downtown Los Angeles, ROW DTLA has continued to take shape,
          transforming 32 acres into an all-encompassing iconic destination. It
          is a growing collective of globally recognized shops, restaurants and
          innovative offices that are spread over six buildings to create their
          own unique L.A. environment."
        </p>
        <span className="credit">LA MAGAZINE</span>
      </BlackSlide>
      <ScrollColumn className="swiper-slide" revealed={revealed >= 9}>
        <PhotoRow>
          <ResponsiveImage
            srcPath="/images/home/section_2/row_1"
            imgAlt="test"
          />
        </PhotoRow>
        <BigText black>
          A vibrant district that
          <br /> pushes the boundaries
          <br /> between work, culture
          <br />
          and play
        </BigText>
      </ScrollColumn>
      <ScrollColumn
        className="swiper-slide"
        revealed={revealed >= 10}
        space-between
      >
        {generateBrandGrid()}
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" revealed={revealed >= 11}>
        <ResponsiveImage srcPath="/images/home/section_2/row_2" imgAlt="test" />
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" revealed={revealed >= 12}>
        <BigText margin-top>
          Elevate your routine with the
          <br /> essentials—dining, working,
          <br /> exercising, pampering—always
          <br /> within reach
        </BigText>
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" revealed={revealed >= 13}>
        <PhotoRow grid>
          <ResponsiveImage
            srcPath="/images/home/section_2/row_3"
            imgAlt="test"
          />
          <ResponsiveImage
            srcPath="/images/home/section_2/row_4"
            imgAlt="test"
          />
        </PhotoRow>
        <PhotoRow grid>
          <ResponsiveImage
            srcPath="/images/home/section_2/row_5"
            imgAlt="test"
          />
          <ResponsiveImage
            srcPath="/images/home/section_2/row_6"
            imgAlt="test"
          />
        </PhotoRow>
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" revealed={revealed >= 14}>
        <MedText margin-top>
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
        <ResponsiveImage srcPath="/images/home/section_2/row_7" imgAlt="test" />
      </ScrollColumn>
    </React.Fragment>
  );
};

export default SectionTwo;
