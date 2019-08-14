import React from 'react';
import styled from 'styled-components';

const AvailabilityContainer = styled.div`
  color: #fff;
  table {
    width: 100%;
    border-collapse: collapse;
    th,
    td {
      border-bottom: 1px solid white;
    }
  }
`;

function Facts() {
  return (
    <AvailabilityContainer className="container">
      <h1 className="page-title">The Available Spaces</h1>
      <table>
        <tbody>
          <tr>
            <th align="left">SQ. FT</th>
            <th align="left">BUILDING</th>
            <th align="left">FLOOR PLANS</th>
          </tr>
          <tr>
            <td valign="top">3,500-7,000</td>
            <td valign="top">767 S. ALAMEDA </td>
            <td valign="top">
              <p>Suite 410</p>
              <p>Suite 410</p>
              <p>Suite 418</p>
              <p>Suite 434</p>
            </td>
          </tr>
        </tbody>
      </table>
    </AvailabilityContainer>
  );
}

export default Facts;
