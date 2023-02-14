/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import './sign-in-form.styles.scss';

import FormInput from '../Form-input/form-input';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthWithUserEmailAndPassword,
} from '../../utils/Firebase/firebase.util';

import Button from '../Button/Button';

const defaultFormFields = {
  email: '',
  password: '',
};

function SignIn() {
  const [formFields, setformFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setformFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInAuthWithUserEmailAndPassword(
        email,
        password
      );

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password from email');
          break;

        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;

        default:
          console.log(error);
      }
    }
  };

  const eventHandler = (event) => {
    const { name, value } = event.target;
    setformFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign In with you Email and password</span>
      <form onSubmit={submitHandler}>
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
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
