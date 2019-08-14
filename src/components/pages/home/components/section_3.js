import React from 'react';

import { keyFacts, featuredIn } from 'data/home';
import ResponsiveImage from 'components/images/ResponsiveImage';
import {
  ScrollColumn,
  BlackSlide,
  BigText,
  MedText,
  PhotoRow,
  BrandRow,
  BrandItem,
  Fact,
  FactRow
} from './home_components';

const generateFacts = () => {
  const result = [];
  let temp = [];
  keyFacts.forEach((el, idx) => {
    temp.push(
      <Fact>
        <span className="fact-index">{idx + 1}</span>
        <span className="fact-body">{el}</span>
      </Fact>
    );
    if ((idx + 1) % 3 === 0) {
      result.push(<FactRow>{temp}</FactRow>);
      temp = [];
    }
  });
  return result;
};

const generateBrandGrid = () => {
  return featuredIn.map(row => {
    return (
      <BrandRow quarter>
        {row.map(el => {
          return (
            <BrandItem quarter>
              <img src={el.logo} alt={`${el.alt} logo`} className="grey-logo" />
            </BrandItem>
          );
        })}
      </BrandRow>
    );
  });
};

const SectionThree = ({ revealed }) => {
  return (
    <React.Fragment>
      <BlackSlide className="swiper-slide" revealed={revealed >= 15}>
        <p className="quote">
          "The thing that’s unique about the ROW is that it’s this incredible modern space, but it’s also really
          historied. The buildings are over 100 years old and so when you’re walking through campus, there’s not really
          many places in LA where you can really feel like you’re a part of LA’s history."
        </p>
        <span className="credit">RACHEL MADDEN, WC + A</span>
      </BlackSlide>
      <ScrollColumn className="swiper-slide" revealed={revealed >= 16}>
        <PhotoRow>
          <ResponsiveImage srcPath="/images/home/section_3/row_1" imgAlt="test" />
        </PhotoRow>
        <BigText black>
          Our non-traditional
          <br /> lives need a<br />
          non-traditional
          <br /> workplace
        </BigText>
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" revealed={revealed >= 17}>
        <MedText margin-top>
          Work in creative offices that
          <br /> foster growth and productivity
          <br /> with added benefits of natural
          <br /> light, lofted ceilings, an
          <br /> exclusive athletic club, and
          <br /> community events
        </MedText>
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" revealed={revealed >= 18}>
        <PhotoRow grid>
          <ResponsiveImage srcPath="/images/home/section_3/row_2" imgAlt="test" />
          <ResponsiveImage srcPath="/images/home/section_3/row_3" imgAlt="test" />
        </PhotoRow>
        <PhotoRow grid>
          <ResponsiveImage srcPath="/images/home/section_3/row_4" imgAlt="test" />
          <ResponsiveImage srcPath="/images/home/section_3/row_5" imgAlt="test" />
        </PhotoRow>
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" revealed={revealed >= 19}>
        <MedText margin-top>
          As your business grows, your
          <br /> work space grows
          <br />
          with it. Invent and customize
          <br /> your office
          <br />
          with complete flexibility
        </MedText>
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" revealed={revealed >= 20}>
        <ResponsiveImage srcPath="/images/home/section_3/row_1" imgAlt="test" />
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" revealed={revealed >= 21}>
        <MedText margin-top>
          Where the workplace extends beyond
          <br /> your own office. Indoor and outdoor
          <br />
          communal spaces, inviting lobbies,
          <br /> roof decks and more provide for a<br />
          more flexible and productive work
          <br /> environment
        </MedText>
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" revealed={revealed >= 22}>
        <PhotoRow grid>
          <ResponsiveImage srcPath="/images/home/section_3/row_6" imgAlt="test" />
          <ResponsiveImage srcPath="/images/home/section_3/row_7" imgAlt="test" />
          <ResponsiveImage srcPath="/images/home/section_3/row_8" imgAlt="test" />
        </PhotoRow>
        <PhotoRow grid>
          <ResponsiveImage srcPath="/images/home/section_3/row_9" imgAlt="test" />
          <ResponsiveImage srcPath="/images/home/section_3/row_10" imgAlt="test" />
          <ResponsiveImage srcPath="/images/home/section_3/row_11" imgAlt="test" />
        </PhotoRow>
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" revealed={revealed >= 22}>
        <BigText margin-top>Key Facts</BigText>
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" revealed={revealed >= 23} space-between>
        {generateFacts()}
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" revealed={revealed >= 24}>
        <BigText margin-top>Featured In</BigText>
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" revealed={revealed >= 25} space-between>
        {generateBrandGrid()}
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" revealed={revealed >= 25}>
        <BigText margin-top black>
          ROW DTLA.
          <br />
          Work life has never
          <br /> looked better.
        </BigText>
      </ScrollColumn>
    </React.Fragment>
  );
};

export default SectionThree;
