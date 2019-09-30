import React from 'react';
import styled from 'styled-components';
import useContactForm from './useContactForm';

import { mediaMax, mediaMin } from 'styles/mediaQueries';

const ContactContainer = styled.div`
  color: #fff;
  form {
    display: flex;
    flex-direction: column;
    align-items: space-between;
    width: 100%;
  }
`;

const UpperContainer = styled.div`
  height: ${props => (props.displayMobile ? 'auto' : '50vh')};
  position: relative;
`;

const UpperForm = styled.div`
  position: ${props => (props.displayMobile ? 'initial' : 'absolute')};
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
    ${mediaMax.tabletLandscape`
      flex-direction: column;
      align-items: center;
      .info-container {
        order: 1;
      }
    `}
  }
`;

const InfoContainer = styled.div`
  h3 {
    font-size: 3vh;
    line-height: 4vh;
    color: rgba(255, 255, 255, 0.5);
    margin-bottom: 0;
  }
  p {
    font-size: 2vh;
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
              <label className="half">
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
              <label className="half">
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
            <a href="https://www.instagram.com/rowdtla/" target="_blank" rel="noopener noreferrer">
              <p>@ROWDTLA</p>
            </a>
          </InfoContainer>
          <button type="submit" value="Submit" className={submitted ? 'active' : ''}>
            Submit
          </button>
        </FormRow>
      </form>
    </ContactContainer>
  );
}

export default Contact;
