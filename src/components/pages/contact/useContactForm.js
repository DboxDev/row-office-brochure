import { useState } from 'react';

const useContactForm = callback => {
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: ''
  });

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
  };

  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
};

export default useContactForm;