import { useState } from 'react';

const useContactForm = callback => {
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    spaceAvailable: '',
    howHear: ''
  });
  const [submitted, toggleFormSubmitted] = useState(false);

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();

      const { email, firstName, lastName, phone, spaceAvailable, howHear } = inputs;

      const text = `Hi,\n\nA new registrant signed up:\n\n
        \n\nName: ${firstName} ${lastName}
        \n\nEmail: ${email}
        \n\nPhone: ${phone}
        \n\nSpace requested: ${spaceAvailable}
        \n\nHow did you hear about us: ${howHear}
      `;

      var emailData = {
        from: '"Row DTLA" <no_reply_row_dtla@dbox.com>',
        to: `"${firstName} ${lastName}" <${email}>`,
        subject: 'ROW DTLA - Thanks for your inquiry',
        text: text
      };

      fetch('http://localhost:3001/post-ses-email', {
        method: 'POST',
        mode: 'cors',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailData)
      })
        .then(response => response.json())
        .then(result => {
          console.log('email sending successful ', result);
        })
        .catch(error => {
          /* eslint-disable no-console */
          console.log('error sending email ', error);
          /* eslint-enable no-console */
        });
    }
  };

  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs,
    submitted,
    toggleFormSubmitted
  };
};

export default useContactForm;
