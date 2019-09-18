import React from 'react';
import styled from 'styled-components';

import availabilityData from 'data/availabilityData';
import Fade from 'react-reveal/Fade';

const AvailabilityContainer = styled.div`
  color: #fff;
  table {
    width: 100%;
    border-collapse: collapse;
    th,
    td {
      padding: 6vh 0;
      border-bottom: 2px solid rgba(255, 255, 255, 0.2);
      font-size: 2vh;
      &.sq-ft-cell {
        font-family: 'SangBleu Kingdom', serif;
        font-weight: normal;
        font-style: normal;
        font-size: 3vh;
      }
      &.building {
      }
      &.offices {
        a {
          display: flex;
          margin-bottom: 1em;
          text-transform: uppercase;
          align-items: center;
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
          span {
            width: 12vh;
          }
          img {
            height: 1.4vh;
            margin: 0 10px;
          }
        }
      }
    }
  }
`;

const AvailabilityCard = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.4);
  margin: 2em 0;
  padding: 3em;
  &:nth-child(1) {
    margin-top: 0;
  }
  .availability-card-row {
    margin: 2em 0;
    &:nth-child(1) {
      margin-top: 0;
    }
    &:nth-child(3) {
      margin-bottom: 0;
    }
    p.sq-ft-title {
      margin-top: 0;
    }
    p.sq-ft {
      font-family: 'SangBleu Kingdom', serif;
      font-size: 2em;
      margin: 0.5em 0;
    }
    .floorplan-mobile-link {
      margin-right: 1em;
      margin-bottom: 1em;
      font-family: 'Apercu Mono', serif;
      display: inline-block;
      text-transform: uppercase;
    }
    .no-margin-bottom {
      margin-bottom: 0;
    }
  }
`;

function renderAvailabilityRows(data) {
  return data.map((building, rowIdx) => {
    const { address, sqFt, floorplans } = building;

    return (
      <tr key={`availability-row-${rowIdx}`}>
        <td valign="top" className="sq-ft-cell">
          {sqFt}
        </td>
        <td valign="top" className="building">
          {address}
        </td>
        <td valign="top" className="offices">
          {floorplans &&
            floorplans.map((office, floorplanIdx) => (
              <a
                key={`availability-row-link-${floorplanIdx}`}
                href={`/floorplans/ROWDTLA_fp_suite_${office.number}.pdf`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{`Suite ${office.number}`}</span>
                <img src="/images/icons/download.svg" alt={`download suite ${office.number}`} />
              </a>
            ))}
          {floorplans.length === 0 ? <span>COMING SOON</span> : ''}
        </td>
      </tr>
    );
  });
}

function renderAvailabilityCards(data) {
  return data.map((building, cardIdx) => {
    const { address, sqFt, floorplans } = building;

    return (
      <Fade>
        <AvailabilityCard key={`availability-card-${cardIdx}`}>
          <div className="availability-card-row">
            <p className="sq-ft-title">SQ FT</p>
            <p className="sq-ft">{sqFt}</p>
          </div>
          <div className="availability-card-row">
            <p>BUILDING</p>
            <p className={floorplans.length === 0 ? 'no-margin-bottom' : undefined}>{address}</p>
          </div>
          <div className="availability-card-row">
            <p>FLOOR PLANS</p>
            {floorplans.length === 0 && <p>COMING SOON</p>}
            {floorplans.length > 0 &&
              floorplans.map((office, floorplanIdx) => (
                <React.Fragment key={`availability-card-${floorplanIdx}-link`}>
                  <a
                    className="floorplan-mobile-link"
                    href={`/floorplans/ROWDTLA_fp_suite_${office.number}.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{`Suite ${office.number}`}</span>
                  </a>
                  {floorplanIdx % 2 === 1 ? <br /> : undefined}
                </React.Fragment>
              ))}
          </div>
        </AvailabilityCard>
      </Fade>
    );
  });
}

function Facts({ displayMobile }) {
  return (
    <AvailabilityContainer displayMobile={displayMobile} className="container">
      {displayMobile ? (
        <div>{renderAvailabilityCards(availabilityData)}</div>
      ) : (
        <table>
          <tbody>
            <tr>
              <th align="left">SQ. FT</th>
              <th align="left">BUILDING</th>
              <th align="left">FLOOR PLANS</th>
            </tr>
            {renderAvailabilityRows(availabilityData)}
          </tbody>
        </table>
      )}
    </AvailabilityContainer>
  );
}

export default Facts;
