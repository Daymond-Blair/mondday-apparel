// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBd8wMdy67Sfa9j0qKz7Lk928CkHI8P03k',
	authDomain: 'mondday-apparel.firebaseapp.com',
	projectId: 'mondday-apparel',
	storageBucket: 'mondday-apparel.appspot.com',
	messagingSenderId: '161298098273',
	appId: '1:161298098273:web:31e3217affa293f3776220',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

// create provider
const provider = new GoogleAuthProvider()

// set parameters for auth provider
provider.setCustomParameters({ prompt: 'select_account' })

export const auth = getAuth(firebaseApp)

export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

// instantiate the database
export const db = getFirestore()

const createUserDocumentFromAuth = async (userAuth) => {
	const userDocRef = doc(db, 'users', userAuth.uid)
}
