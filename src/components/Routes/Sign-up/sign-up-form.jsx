/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import './sign-up-form.styles.scss';

import FormInput from '../../Form-input/form-input';
import {
  createAuthWithUserEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../../utils/Firebase/firebase.util';

import Button from '../../Button/Button';
const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

function SignUp() {
  const [formFiedls, setformFiedls] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFiedls;

  const resetFormFields = () => {
    setformFiedls(defaultFormFields);
  };
  const submitHandler = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords does not match');
      return;
    }

    try {
      const { user } = await createAuthWithUserEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      console.log('user creation encountered an error', error);
    }
  };

  const eventHandler = (event) => {
    const { name, value } = event.target;
    setformFiedls({ ...formFiedls, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign Up with you Email and password</span>
      <form onSubmit={submitHandler}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={eventHandler}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={eventHandler}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={eventHandler}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={eventHandler}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button type="submit">Sign in</Button>
      </form>
    </div>
  );
}

export default SignUp;
