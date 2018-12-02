import React from 'react';

const FormField = ({
  id,
  element,
  value,
  config,
  validation,
  valid,
  validationMessage,
  changed,
}) => {
  let template;

  console.log(element);

  switch (element) {
    case 'input':
      template = (
        <div>
          <input
            {...config}
            value={value}
            onChange={event => changed(id, event)}
          />

          {validation && !valid ? (
            <div className="error_label">{validationMessage}</div>
          ) : null}
        </div>
      );
      break;
    default:
      template = null;
  }

  return <div>{template}</div>;
};

export default FormField;
