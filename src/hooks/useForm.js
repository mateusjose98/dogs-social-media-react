import React, { useState } from 'react';
const validators = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um email valido',
  },
};
export const useForm = (validation) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = useState(null);

  function validate(value) {
    if (validation === false) return true;
    if (validation.length === 0) {
      setError('Preencha um valor');
      return false;
    } else if (validators[validation] && validators[validation].test(value)) {
      setError(validators[validation].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) {
      validate(target.value);
    }
    setValue(target.value);
  }

  return {
    value,
    setValue,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};
