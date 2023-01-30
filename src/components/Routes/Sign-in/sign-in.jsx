import { signInWithGooglePopup } from '../../../utils/Firebase/firebase.util'

function SignIn() {

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response)
    }

    return (
        <div>
            <h1>Sign Page</h1>
            <button onClick={logGoogleUser}> Sign In with Google</button>
        </div>

    );
}

export default SignIn;