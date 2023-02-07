/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../../utils/Firebase/firebase.util';

import SignUp from '../Sign-up/sign-up-form';
import SignIn from '../../Sign-in/sign-in-form';

import './authentication.styles.scss';

function Authentication() {
  return (
    <div className="authentication-container">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default Authentication;
