import React from 'react';
import styled from 'styled-components';

const HorizontalContainer = styled.div`
  height: 100%;
  white-space: nowrap;
  background: orange;
  ${'' /* overflow-y: hidden; */}
  .column {
    display: inline-block;
    width: 30%;
    height: 100%;
    margin: 0 20px;
    &.blue {
      background: blue;
    }
    &.red {
      background: red;
    }
    &.grey {
      background: grey;
    }
    &.orange {
      background: orange;
    }
  }
`;

function Index() {
  return (
    <HorizontalContainer>
      <div className="column blue" />
      <div className="column red" />
      <div className="column red" />
      <div className="column blue" />
      <div className="column orange" />
    </HorizontalContainer>
  );
}

export default Index;
