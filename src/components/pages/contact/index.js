import React from 'react';
import styled from 'styled-components';
import useContactForm from './useContactForm';

import { mediaMax, mediaMin } from 'styles/mediaQueries';

const ContactContainer = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  ${mediaMin.tabletLandscape`
    flex-direction: row;
    align-items: flex-start !important;
  `}
  form {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    ${mediaMin.tabletLandscape`
      width: 70%;
    `}
  }
`;

const ContactInfoCol = styled.div`
  flex-direction: column;
  height: 100%;
  ${mediaMin.tabletLandscape`
  width: 30%;
  padding-top: calc(18px + 1em + 2vh);
  padding-left: 5vw;
  `}
  h4 {
    margin: 0 0 16px 0;
    font-size: 1.5em;
  }
  .contact {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    text-transform: uppercase;
    a {
      text-decoration: none;
    }
    span {
      line-height: 1.5em;
    }
  }
  &.desktop {
    display: none;
    ${mediaMin.tabletLandscape`
    display: flex;
  `}
  }
  &.mobile {
    display: flex;
    ${mediaMin.tabletLandscape`
    display: none;
  `}
  }
`;

const UpperContainer = styled.div`
  ${mediaMin.tabletLandscape`
    height: ${props => (props.displayMobile ? 'auto' : '50vh')};
  `}

  position: relative;
`;

const UpperForm = styled.div`
  ${mediaMin.tabletLandscape`
    position: ${props => (props.displayMobile ? 'initial' : 'absolute')};
  `}
  opacity: ${props => (props.active ? 1 : 0)};
  visibility: ${props => (props.active ? 'visible' : 'hidden')};
  transition: opacity 300ms ease;
  width: 100%;
`;

const ThankYouMessage = styled.div`
  display: ${props => (props.active ? 'initial' : 'none')};
  opacity: ${props => (props.active ? 1 : 0)};
  visibility: ${props => (props.active ? 'visible' : 'hidden')};
  transition: opacity 300ms ease;
  h1 {
    font-size: 5vh;
    font-weight: 600;
  }
  h3 {
    font-size: 2vh;
    color: rgba(255, 255, 255, 0.4);
  }
`;

const FormRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${props => props.justifyContent && `justify-content: ${props.justifyContent}`}
  ${props => props.alignItems && `align-items: ${props.alignItems}`}
  margin: 4vh 0;
  width: 100%;
  ${mediaMin.tabletLandscape`
    margin: 2vh 0;
  `}
  &:nth-child(1) {
    ${props => props.displayMobile && `margin: 0 0 4vh`};
  }
  label {
    font-size: 12px;
    ${mediaMin.tabletLandscape`
      font-size: 1.4vh;
    `}
    &.half {
      width: ${props => (props.displayMobile ? '100%' : '50%')};
      &:nth-child(1) {
        padding-right: ${props => (props.displayMobile ? '0' : '1em')};
      }
      &:nth-child(even) {
        ${props => props.displayMobile && `margin-top: 4vh`};
      }
    }
    &.full {
      width: 100%;
    }
    span {
      display: block;
      text-transform: uppercase;
      margin-bottom: 1em;
    }
    input {
      width: 100%;
      color: #fff;
      caret-color: #fff;
      border: none;
      background: rgba(255, 255, 255, 0.1);
      border-bottom: 1px solid rgba(255, 255, 255, 0.7);
      padding-bottom: 5px;
      padding-left: 5px;
      height: 50px;
      font-size: 20px;
      padding-top: 0;
      ${mediaMin.tabletLandscape`
        height: initial;
        font-size: 2vh;
        padding-top: 1vh;
      `}
    }
  }

  button[type='submit'] {
    color: #fff;
    border: 1px solid white;
    text-transform: uppercase;
    background: none;
    font-size: 2.4vh;
    font-weight: 100;
    padding: 1vh 3vh;
    cursor: pointer;
    transition: all 300ms ease;
    letter-spacing: 2px;
    ${mediaMax.tabletLandscape`
      margin-bottom: 4vh;
    `}
    &:hover, &:focus {
      background: #fff;
      color: #000;
    }
    &.active {
      transition: all 300ms ease;
      opacity: 0;
      visibility: hidden;
    }
  }
  &.lower-row {
    align-items: flex-start;
    ${mediaMax.tabletLandscape`
    flex-direction: column-reverse;
      align-items: center;
    `}
  }
`;

const InfoContainer = styled.div`
  margin-top: 3vh;
  ${mediaMin.tabletLandscape`
    margin-top: 0;
  `}
  h3 {
    font-size: 3vh;
    line-height: 4vh;
    color: rgba(255, 255, 255, 0.5);
    margin: 0;
  }
  p {
    font-size: 1.25vh;
    color: rgba(255, 255, 255, 0.5);
    margin-bottom: 0;
    ${mediaMax.tabletLandscape`
      text-align: center;
    `}
  }
  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

function Contact({ displayMobile }) {
  const { inputs, handleInputChange, handleSubmit, submitted } = useContactForm();

  return (
    <ContactContainer className="contact-container">
      <form onSubmit={handleSubmit}>
        <UpperContainer displayMobile={displayMobile}>
          <UpperForm displayMobile={displayMobile} active={!submitted}>
            <FormRow displayMobile={displayMobile}>
              <label className="half">
                <span>* First Name</span>
                <input
                  className="input"
                  type="text"
                  name="firstName"
                  onChange={handleInputChange}
                  value={inputs.firstName}
                  required
                />
              </label>
              <label className="half">
                <span>* Last Name</span>
                <input
                  className="input"
                  type="text"
                  name="lastName"
                  onChange={handleInputChange}
                  value={inputs.lastName}
                  required
                />
              </label>
            </FormRow>
            <FormRow displayMobile={displayMobile}>
              <label className="full">
                <span>* Email</span>
                <input
                  className="input"
                  type="email"
                  name="email"
                  onChange={handleInputChange}
                  value={inputs.email}
                  required
                />
              </label>
            </FormRow>
            <FormRow displayMobile={displayMobile}>
              <label className="full">
                <span>* Phone</span>
                <input
                  className="input"
                  type="tel"
                  name="phone"
                  onChange={handleInputChange}
                  value={inputs.phone}
                  required
                />
              </label>
            </FormRow>
            <FormRow displayMobile={displayMobile}>
              <label className="full">
                <span>How much space (Sq Ft) are you looking for?</span>
                <input
                  className="input"
                  type="text"
                  name="spaceAvailable"
                  onChange={handleInputChange}
                  value={inputs.spaceAvailable}
                />
              </label>
            </FormRow>
            <FormRow displayMobile={displayMobile}>
              <label className="full">
                <span>How did you hear about ROW DTLA?</span>
                <input
                  className="input"
                  type="text"
                  name="howHear"
                  onChange={handleInputChange}
                  value={inputs.howHear}
                />
              </label>
            </FormRow>
          </UpperForm>
          <ThankYouMessage active={submitted}>
            <h1>
              Thank you for your
              <br /> interest in ROW DTLA.
            </h1>
            <h3>We will be in touch soon.</h3>
          </ThankYouMessage>
        </UpperContainer>

        <FormRow alignItems="flex-end" justifyContent="space-between" className="lower-row">
          <InfoContainer className="info-container">
            <h3 className="address">
              777 S. Alameda Street, <br />
              Los Angeles, CA 90021
            </h3>
            <a href="https://www.rowdtla.com" target="_blank" rel="noopener noreferrer">
              <p>WWW.ROWDTLA.COM</p>
            </a>
          </InfoContainer>
          <ContactInfoCol className="mobile">
            <h4>Creative Office Leasing</h4>
            <div className="contact">
              <span>Joshua Wrobel (License #01237972)</span>
              <span>
                <a href="mailto:josh.wrobel@am.jll.com">josh.wrobel@am.jll.com</a>
              </span>
              <span>
                <a href="tel:2132396001">213.239.6001</a>
              </span>
            </div>
            <div className="contact">
              <span>Jaclyn Ward (License #01912455)</span>
              <span>
                <a href="mailto:josh.wrobel@am.jll.com">josh.wrobel@am.jll.com</a>
              </span>
              <span>
                <a href="tel:3105953618">310.595.3618</a>
              </span>
            </div>
          </ContactInfoCol>
          <button type="submit" value="Submit" className={submitted ? 'active' : ''}>
            Submit
          </button>
        </FormRow>
      </form>
      <ContactInfoCol className="desktop">
        <h4>Creative Office Leasing</h4>
        <div className="contact">
          <span>Joshua Wrobel (License #01237972)</span>
          <span>
            <a href="mailto:josh.wrobel@am.jll.com">josh.wrobel@am.jll.com</a>
          </span>
          <span>
            <a href="tel:2132396001">213.239.6001</a>
          </span>
        </div>
        <div className="contact">
          <span>Jaclyn Ward (License #01912455)</span>
          <span>
            <a href="mailto:josh.wrobel@am.jll.com">josh.wrobel@am.jll.com</a>
          </span>
          <span>
            <a href="tel:3105953618">310.595.3618</a>
          </span>
        </div>
      </ContactInfoCol>
    </ContactContainer>
  );
}

export default Contact;
