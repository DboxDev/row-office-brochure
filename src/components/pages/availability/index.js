import React from 'react';
import styled from 'styled-components';

import availabilityData from 'data/availabilityData';

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

function renderAvailabilityRows(data) {
  return data.map(building => {
    const { address, sqFt, floorplans } = building;

    return (
      <tr>
        <td valign="top" class="sq-ft-cell">
          {sqFt}
        </td>
        <td valign="top" class="building">
          {address}
        </td>
        <td valign="top" className="offices">
          {floorplans &&
            floorplans.map(floorplan => (
              <a href={`/floorplans/ROWDTLA_fp_suite_${floorplan.suite}.pdf`}>
                <span>{floorplan.name}</span>
                <img
                  src="/images/icons/download.svg"
                  alt={`download floorplan ${floorplan.name}`}
                />
              </a>
            ))}
        </td>
      </tr>
    );
  });
}

function Facts() {
  return (
    <AvailabilityContainer className="container">
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
    </AvailabilityContainer>
  );
}

export default Facts;
