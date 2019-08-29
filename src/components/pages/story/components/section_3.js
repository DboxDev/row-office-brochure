import React from 'react';
import ReactPlayer from 'react-player';

import RotatingGrid from 'components/images/RotatingGrid';
import ResponsiveImage from 'components/images/ResponsiveImage';
import {
  ScrollColumn,
  BlackSlide,
  BigText,
  MedText,
  PhotoRow,
  PhotoGridRow,
  PressRow,
  PressItem,
  Fact,
  FactRow,
  Row,
  PlayerWrapper
} from './styles';

import { keyFacts, newsLogos } from 'data/home';
import { workspacesGrid } from 'data/rotatingImages';

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

const generatePressGrid = () => {
  return newsLogos.map((row, rowIdx) => {
    return (
      <PressRow key={`row-${rowIdx}`}>
        {row.map((el, elIdx) => {
          return (
            <PressItem href={el.href} target="_blank" key={`row-${rowIdx}-el-${elIdx}`}>
              <img src={el.logo} alt={`${el.alt} logo`} className="press-logo" />
            </PressItem>
          );
        })}
      </PressRow>
    );
  });
};

const SectionThree = ({ revealed }) => {
  return (
    <React.Fragment>
      <BlackSlide className="swiper-slide" revealed={revealed >= 15}>
        <h1 className="quote">
          "The thing that’s unique about the ROW is that it’s this incredible modern space, but it’s
          also really historied. The buildings are over 100 years old and so when you’re walking
          through campus, there’s not really many places in LA where you can really feel like you’re
          a part of LA’s history."
        </h1>
        <span className="credit">RACHEL MADDEN, WC + A</span>
      </BlackSlide>
      <ScrollColumn className="swiper-slide" paddingLeft="160px" revealed={revealed >= 16}>
        <PhotoRow>
          <ResponsiveImage
            srcPath="/images/pages/home/section_3/row_office_section3_1"
            imgAlt="test"
          />
        </PhotoRow>
        <Row height="45%">
          <BigText className="black-500">
            Our non-traditional
            <br /> lives need a<br />
            non-traditional
            <br /> workplace
          </BigText>
        </Row>
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" revealed={revealed >= 17}>
        <Row height="55%" />
        <Row height="45%">
          <MedText>
            Work in creative offices that
            <br /> foster growth and productivity
            <br /> with added benefits of natural
            <br /> light, lofted ceilings, an
            <br /> exclusive athletic club, and
            <br /> community events
          </MedText>
        </Row>
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" revealed={revealed >= 18}>
        <RotatingGrid imgGrid={workspacesGrid} carouselActive={revealed >= 18} />
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" revealed={revealed >= 19}>
        <Row height="55%" />
        <Row height="45%">
          <MedText>
            Never move again—ROW
            <br /> accomodates and adapts to
            <br /> growth. As your business
            <br /> evolves, your workspace
            <br /> evolves with it.
          </MedText>
        </Row>
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" revealed={revealed >= 20}>
        <PlayerWrapper>
          <ReactPlayer
            className="react-player"
            width="100%"
            height="100%"
            url="https://vimeo.com/355434466"
            playing
            light="/images/video/rowdtla_video_preview_office.jpg"
          />
        </PlayerWrapper>
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" revealed={revealed >= 21}>
        <Row height="55%" />
        <Row height="45%">
          <MedText>
            Where the workplace extends beyond
            <br /> your own office. Indoor and outdoor
            <br />
            communal spaces, inviting lobbies,
            <br /> roof decks and more provide for a<br />
            more flexible and productive work
            <br /> environment
          </MedText>
        </Row>
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" paddingRight="200px" revealed={revealed >= 22}>
        <PhotoGridRow>
          <ResponsiveImage
            srcPath="/images/pages/home/section_3/row_office_section3_2"
            imgAlt="test"
          />
          <ResponsiveImage
            srcPath="/images/pages/home/section_3/row_office_section3_3"
            imgAlt="test"
          />
          <ResponsiveImage
            srcPath="/images/pages/home/section_3/row_office_section3_4"
            imgAlt="test"
          />
        </PhotoGridRow>
        <PhotoGridRow>
          <ResponsiveImage
            srcPath="/images/pages/home/section_3/row_office_section3_5"
            imgAlt="test"
          />
          <ResponsiveImage
            srcPath="/images/pages/home/section_3/row_office_section3_6"
            imgAlt="test"
          />
          <ResponsiveImage
            srcPath="/images/pages/home/section_3/row_office_section3_7"
            imgAlt="test"
          />
        </PhotoGridRow>
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" paddingRight="0" revealed={revealed >= 22}>
        <Row height="55%" />
        <Row height="45%">
          <BigText className="grey-500">Key facts</BigText>
        </Row>
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" revealed={revealed >= 23} spaceBetween>
        {generateFacts()}
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" paddingRight="0" revealed={revealed >= 24}>
        <Row height="55%" />
        <Row height="45%">
          <BigText className="grey-500">In the news</BigText>
        </Row>
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" revealed={revealed >= 25} spaceBetween>
        {generatePressGrid()}
      </ScrollColumn>
      <ScrollColumn className="swiper-slide" paddingRight="160px" revealed={revealed >= 26}>
        <Row height="55%" />
        <Row height="45%">
          <BigText className="black-500">
            ROW DTLA.
            <br />
            Work life has never
            <br /> looked better.
          </BigText>
        </Row>
      </ScrollColumn>
    </React.Fragment>
  );
};

export default SectionThree;
