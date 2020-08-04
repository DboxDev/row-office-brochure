import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

import { factsArray } from 'data/facts';

const FactContainer = styled.div`
  color: #fff;
  h1.title {
    font-size: 4rem;
    font-weight: 500;
  }
  ul {
    border-bottom: 2px solid rgba(255, 255, 255, 0.2);
    padding: 2em 0 2em 0.2em;
    margin: 0;
    li {
      margin: 2em 0;
      list-style-type: none;
      text-transform: uppercase;
      letter-spacing: 1px;
      text-indent: -5px;
      white-space: pre-line;
      &:before {
        content: '- ';
        text-indent: -5px;
      }
    }
  }
`;

function Facts() {
  return (
    <FactContainer className="facts-container">
      {factsArray.map((factArray, arrayIdx) => {
        return (
          <ul key={`fact-section-${arrayIdx}`}>
            {factArray.map((fact, factIdx) => (
              <Fade key={`array-${arrayIdx}-fact-${factIdx}`}>
                <li>{fact}</li>
              </Fade>
            ))}
          </ul>
        );
      })}
    </FactContainer>
  );
}

export default Facts;
