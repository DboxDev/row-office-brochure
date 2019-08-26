import React from 'react';
import styled from 'styled-components';
import useContactForm from './useContactForm';

const ContactContainer = styled.div`
  color: #fff;
  form {
    display: flex;
    flex-direction: column;
    align-items: space-between;
    width: 100%;
  }
`;

const FormRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${props => props.justifyContent && `justify-content: ${props.justifyContent}`}
  ${props => props.alignItems && `align-items: ${props.alignItems}`}
  margin: 2vh 0;
  width: 100%;
  label {
    font-size: 2vh;
    &.half {
      width: 50%;
      &:nth-child(1) {
        padding-right: 1em;
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
      background: rgba(255, 255, 255, 0.2);
      border-bottom: 1px solid #fff;
      font-size: 2vh;
      padding-top: 1vh;
      padding-bottom: 5px;
      padding-left: 5px;
    }
  }
  button[type='submit'] {
    color: #fff;
    border: 1px solid white;
    text-transform: uppercase;
    background: none;
    font-size: 4vh;
    font-weight: 100;
    padding: 1vh 3vh;
    cursor: pointer;
    transition: all 300ms ease;
    letter-spacing: 2px;
    &:hover {
      background: #fff;
      color: #000;
    }
  }
`;

const InfoContainer = styled.div`
  color: rgba(255, 255, 255, 0.5);
  h3 {
    font-size: 3vh;
    line-height: 4vh;
  }
  p {
    font-size: 2vh;
    text-transform: uppercase;
  }
`;

function Contact() {
  const { inputs, handleInputChange, handleSubmit } = useContactForm();

  return (
    <ContactContainer className="contact-container">
      <form onSubmit={handleSubmit}>
        <FormRow>
          <label className="half">
            <span>First Name</span>
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
            <span>Last Name</span>
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
        <FormRow>
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
            <span>Phone</span>
            <input
              className="input"
              type="text"
              name="phone"
              onChange={handleInputChange}
              value={inputs.phone}
              required
            />
          </label>
        </FormRow>
        <FormRow>
          <label className="full">
            <span>How much space (SqFt) are you looking for?</span>
            <input
              className="input"
              type="text"
              name="spaceAvailable"
              onChange={handleInputChange}
              value={inputs.spaceAvailable}
              required
            />
          </label>
        </FormRow>
        <FormRow>
          <label className="full">
            <span>How did you hear about ROW DTLA?</span>
            <input
              className="input"
              type="text"
              name="howHear"
              onChange={handleInputChange}
              value={inputs.howHear}
              required
            />
          </label>
        </FormRow>
        <FormRow alignItems="flex-end" justifyContent="space-between">
          <InfoContainer>
            <h3>
              777 S. Alameda Street, <br />
              Los Angeles, CA 90021
            </h3>
            <p>
              www.ROWDTLA.com
              <br /> @rowdtla
            </p>
          </InfoContainer>
          <button type="submit" value="Submit">
            Submit
          </button>
        </FormRow>
      </form>
    </ContactContainer>
  );
}

export default Contact;
