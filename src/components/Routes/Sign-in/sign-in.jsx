import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../../utils/Firebase/firebase.util'


function SignIn() {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    return (
        <div>
            <h1>Sign Page</h1>
            <button onClick={logGoogleUser}> Sign In with Google</button>
        </div>

    );
}

export default SignIn;