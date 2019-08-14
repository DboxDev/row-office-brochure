import React from 'react';
import styled from 'styled-components';

const FactContainer = styled.div`
  color: #fff;
  h1.title {
    font-size: 4rem;
    font-weight: 500;
  }
  ul {
    border-bottom: 2px solid rgba(255, 255, 255, 0.2);
    padding: 2em 0 2em 1em;
    margin: 0;
    li {
      margin: 2em 0;
      list-style-type: circle;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }
`;

const factsArray = [
  [
    'A creative district on the western edge of the Arts District',
    '1920’s historic buildings',
    '32-acre intimate, walkable district',
    'Expansive windows, abundant natural light',
    'Unparalleled views of DTLA skyline',
    'Access highly educated DTLA workforce and more affordable housing options than West LA'
  ],
  [
    'Adjacent to future Arts District South Metro station',
    '4,000 stall Parking Structure.  4 per 1,000 SF parking',
    'Continuous morning and evening shuttles to and from Union Station and 7th Street Metro stop',
    'Metro Bike and Indoor Bike room'
  ],
  [
    'Flexible floor plates 3,600 – 400,000 SF with the ability to grow',
    'Prebuilt spaces from 3,600 – 35,00 SF, move right-in',
    'Oversized elevators',
    'HVAC serviced by Tenant Controlled VRF systems',
    'Fiber Capabilities',
    '24 / 7 on-site security'
  ],
  [
    'Communal tenant lounges, kitchens, roof decks and outdoor landscaped courtyards',
    'Athletic Club with wellness programs and personal training'
  ],
  [
    'X restaurants featuring the culinary anchors The Manufactory LA & Smorgasburg LA.',
    'X retailers',
    'Art and Music activations',
    'Private Event spaces',
    'Team building opportunities',
    'Ceramic studio, Wine & spirits tasting, Artisan Workshops'
  ],
  [
    'Around the Neighborhood:',
    'Hauser & Wirth, Soho House, Firehouse Hotel, ArtShare, Dover Street Market.',
    'Who’s here?',
    'Adidas, Ghost Management, UbTech, Spaces, Warner Music, Spotify, Honey, WeWork, HyperloopOne'
  ]
];

function Facts() {
  return (
    <FactContainer className="fact-container">
      <h1 className="title">The Facts</h1>
      {factsArray.map(factArray => {
        return (
          <ul>
            {factArray.map(fact => (
              <li>{fact}</li>
            ))}
          </ul>
        );
      })}
    </FactContainer>
  );
}

export default Facts;
