import React from 'react';

import RotatingGrid from 'components/images/RotatingGrid';
import ResponsiveImage from 'components/images/ResponsiveImage';
import { ScrollColumn, BlackSlide, BigText, MedText, PhotoRow, BrandRow, BrandItem, Fact, FactRow } from './styles';

import { keyFacts, featuredIn } from 'data/home';
import { welcomeGrid } from 'data/rotatingImages';

const generateFacts = () => {
  const rows = [];
  let cols = [];
  keyFacts.forEach((el, idx) => {
    cols.push(
      <Fact key={`fact-${idx}`} index={idx + 1}>
        <span className="fact-index">{idx + 1}</span>
        <span className="fact-body">{el}</span>
      </Fact>
    );
    if ((idx + 1) % 3 === 0) {
      rows.push(<FactRow key={`fact-${idx}`}>{cols}</FactRow>);
      cols = [];
    }
  });
  return rows;
};

const generateBrandGrid = () => {
  return featuredIn.map((row, rowIdx) => {
    return (
      <BrandRow key={`row-${rowIdx}`} quarter>
        {row.map((el, elIdx) => {
          return (
            <BrandItem key={`row-${rowIdx}-el-${elIdx}`} quarter>
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
        <h1 className="quote">
          "The thing that’s unique about the ROW is that it’s this incredible modern space, but it’s also really
          historied. The buildings are over 100 years old and so when you’re walking through campus, there’s not really
          many places in LA where you can really feel like you’re a part of LA’s history."
        </h1>
        <span className="credit">RACHEL MADDEN, WC + A</span>
      </BlackSlide>
      <ScrollColumn className="swiper-slide" paddingRight="100px" revealed={revealed >= 16}>
        <PhotoRow>
          <ResponsiveImage srcPath="/images/home/section_3/row_1" imgAlt="test" />
        </PhotoRow>
        <BigText intro>
          Our non-traditional
          <br /> lives need a<br />
          non-traditional
          <br /> workplace
        </BigText>
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" paddingLeft="100px" paddingRight="100px" revealed={revealed >= 17}>
        <MedText marginTop>
          Work in creative offices that
          <br /> foster growth and productivity
          <br /> with added benefits of natural
          <br /> light, lofted ceilings, an
          <br /> exclusive athletic club, and
          <br /> community events
        </MedText>
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" revealed={revealed >= 18}>
        <RotatingGrid imgGrid={welcomeGrid} carouselActive={revealed >= 18} />
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" revealed={revealed >= 19}>
        <MedText marginTop>
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
      <ScrollColumn className="swiper-slide" paddingLeft="100px" paddingRight="100px" revealed={revealed >= 21}>
        <MedText marginTop>
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
      <ScrollColumn className="swiper-slide" paddingLeft="100px" paddingRight="100px" revealed={revealed >= 22}>
        <BigText marginTop marginBottom="200px">
          Key facts
        </BigText>
      </ScrollColumn>
      <ScrollColumn
        className="swiper-slide"
        paddingLeft="100px"
        paddingRight="100px"
        revealed={revealed >= 23}
        space-between
      >
        {generateFacts()}
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" paddingLeft="100px" paddingRight="100px" revealed={revealed >= 24}>
        <BigText marginTop marginBottom="200px">
          In the news
        </BigText>
      </ScrollColumn>
      <ScrollColumn
        className="swiper-slide"
        paddingLeft="100px"
        paddingRight="100px"
        revealed={revealed >= 25}
        space-between
      >
        {generateBrandGrid()}
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" revealed={revealed >= 25}>
        <BigText marginTop intro>
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
