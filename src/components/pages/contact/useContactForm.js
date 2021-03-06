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

      const text = `New inquiry from the office brochure.
        \n\nRegistrant Details:
        \nName: ${firstName} ${lastName}
        \nEmail: ${email}
        \nPhone: ${phone}
        \nSpace requested: ${spaceAvailable}
        \nHow did you hear about us: ${howHear}
      `;

      var emailData = {
        from: '"ROW DTLA" <no_reply_row_dtla@dbox.com>',
        to: `"ROW DTLA" <rowdtlaoffice@atlas-cap.com>`,
        subject: 'ROW DTLA - You have received an inquiry',
        text: text
      };

      fetch('https://form.api.dbxd.com/post-ses-email', {
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
          toggleFormSubmitted(true);
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
    submitted
  };
};

export default useContactForm;
