import React from 'react';
import styled from 'styled-components';
import useContactForm from './useContactForm';

const ContactContainer = styled.div`
  color: #fff;
`;

function Contact() {
  const { inputs, handleInputChange, handleSubmit } = useContactForm();

  return (
    <ContactContainer className="container">
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            className="input"
            type="text"
            name="firstName"
            onChange={handleInputChange}
            value={inputs.firstName}
            required
          />
        </label>
        <label>
          Last Name:
          <input
            className="input"
            type="text"
            name="lastName"
            onChange={handleInputChange}
            value={inputs.lastName}
            required
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </ContactContainer>
  );
}

export default Contact;
