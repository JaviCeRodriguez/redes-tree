import { auth, providers } from "../firebase";
// eslint-disable-next-line
export default {
    signIn: () => auth.signInWithPopup(providers.google),
    signOut: () => auth.signOut(),
    onChange: (callback) => auth.onAuthStateChanged(callback),
};