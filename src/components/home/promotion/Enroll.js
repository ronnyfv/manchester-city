import React, { PureComponent } from 'react';
import { Fade } from 'react-reveal';

import { firebasePromotions } from './../../../firebase';
import FormField from './../../shared/FormField';
import { validate } from './../../../utils/validation-helpers';

class Enroll extends PureComponent {
  state = {
    formError: false,
    formSent: false,
    formMessage: undefined,
    formData: {
      email: {
        id: 'email',
        element: 'input',
        value: '',
        config: {
          name: 'email_input',
          type: 'email',
          placeholder: 'Enter you email',
        },
        validation: {
          required: true,
          email: true,
        },
        valid: false,
        validationMessage: undefined,
      },
    },
  };

  submitForm = event => {
    event.preventDefault();

    const { formData } = this.state;
    const dataToSubmit = {};

    for (let key in formData) {
      if (!formData[key].valid) {
        this.setState(state => ({
          ...state,
          formSent: false,
          formError: true,
          formMessage: 'Something is wrong, try again',
        }));
        return;
      }

      dataToSubmit[key] = formData[key].value;
    }

    firebasePromotions
      .orderByChild('email')
      .equalTo(dataToSubmit.email)
      .once('value')
      .then(snapshot => {
        if (!snapshot.val()) {
          firebasePromotions.push(dataToSubmit);
          this.resetForm('Email registered with success', false, true);
        } else {
          this.resetForm('Email already registered', true, false);
        }
      });
  };

  resetForm = (message, formError, formSent) => {
    this.setState(state => ({
      ...state,
      formError,
      formSent,
      formMessage: message,
      formData: Object.keys(state.formData).reduce(
        (accumulator, currentValue) => ({
          ...accumulator,
          [currentValue]: {
            ...state.formData[currentValue],
            value: '',
            valid: false,
            validationMessage: undefined,
          },
        }),
        {},
      ),
    }));
  };

  inputChanged = (id, event) => {
    const { formData } = this.state;

    const value = event.target.value.trim();
    const { error, message } = validate(value, formData[id].validation);

    this.setState(state => ({
      ...state,
      formError: false,
      formMessage: undefined,
      formData: {
        ...state.formData,
        [id]: {
          ...state.formData[id],
          value,
          valid: !error,
          validationMessage: message,
        },
      },
    }));
  };

  render() {
    const { formData, formError, formSent, formMessage } = this.state;

    return (
      <Fade>
        <div className="enroll_wrapper">
          <form onSubmit={this.submitForm}>
            <div className="enroll_title">Enter your email</div>

            <div className="enroll_input">
              <FormField {...formData.email} changed={this.inputChanged} />

              {formError ? (
                <div className="error_label">{formMessage}</div>
              ) : null}

              {formSent ? (
                <div className="success_label">{formMessage}</div>
              ) : null}

              <button onClick={this.submitForm}>Enroll</button>

              <div className="enroll_discl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                vitae pulvinar ipsum. Ut sit amet elementum risus.
              </div>
            </div>
          </form>
        </div>
      </Fade>
    );
  }
}

export default Enroll;
