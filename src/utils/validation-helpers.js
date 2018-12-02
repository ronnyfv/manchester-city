export const validate = (value, validation) => {
  let error = false;
  let message;

  if (validation.required && !value) {
    error = true;
    message = 'This field is required';
  } else if (validation.email && !/\S+@\S+\.\S+/.test(value)) {
    error = true;
    message = 'Must be a valid email';
  }

  return { error, message };
};
