import React from 'react';
import styled from 'styled-components';
import useContactForm from './useContactForm';

const ContactContainer = styled.div`
  color: #fff;
`;

const FormRow = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  label {
    background: grey;
    &.half {
      width: 50%;
    }
    &.full {
      width: 100%;
    }
    span {
      display: block;
    }
  }
`;

function Contact() {
  const { inputs, handleInputChange, handleSubmit } = useContactForm();

  return (
    <ContactContainer className="container">
      <form onSubmit={handleSubmit}>
        <FormRow>
          <label className="half">
            <span>First Name:</span>
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
            <span>Last Name:</span>
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

        <input type="submit" value="Submit" />
      </form>
    </ContactContainer>
  );
}

export default Contact;
