import React from 'react';
import ResponsiveImageMobile from 'components/images/ResponsiveImage';

import { BlackSlideMobile, SlideMobile } from '../styles';

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
      </SlideMobile>
    </React.Fragment>
  );
};

export default SectionOneMobile;
