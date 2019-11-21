import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

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

const factsArray = [
  [
    'A creative district on the western edge of the Arts District',
    '1920s historic buildings',
    '32-acre intimate, walkable district',
    'Expansive windows, abundant natural light',
    'Unparalleled views of DTLA skyline'
  ],
  [
    'Adjacent to future Arts District South Metro station',
    '4 per 1,000 SF parking, 4,000 stall Parking Structure',
    'Continuous morning and evening shuttles to and from Union Station and 7th Street Metro Station',
    'Metro Bike Station and Indoor Bike room'
  ],
  [
    'Flexible floor plates 3,600 – 400,000 SF with the ability to grow',
    'Prebuilt spaces from 3,600 – 35,000 SF, move right in',
    'Oversized elevators',
    'HVAC serviced by Tenant Controlled VRF systems',
    'Fiber Capabilities',
    '24 / 7 on-site security'
  ],
  [
    'Communal tenant lounges, kitchens, roof decks and outdoor landscaped courtyards',
    'Exclusive Athletic Club with wellness programs and personal training'
  ],
  [
    '8 restaurants featuring the culinary anchor and The Manufactory LA',
    '35 retailers',
    'Art and Music activations',
    'Private Event spaces',
    'Team-building opportunities',
    'Ceramic studio, Wine & spirits tasting, Artisan Workshops'
  ],
  [
    'Around the Neighborhood: Hauser & Wirth, Soho House, Firehouse Hotel, Adidas, Art Share L.A.,\n Dover Street Market, Ghost Management, UbTech, Spaces, Warner Music Group, Spotify, Honey,\n WeWork, Hyperloop One, Bestia, Rolling Greens'
  ]
];

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
