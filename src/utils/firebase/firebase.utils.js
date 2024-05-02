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

export const auth = getAuth()

export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

// instantiate the database
export const db = getFirestore()

// user account creation
const createUserDocumentFromAuth = async (userAuth) => {
	const userDocRef = doc(db, 'users', userAuth.uid)

	const userSnapshot = await getDoc(userDocRef)

	// if user data does not exist
	if (!userSnapshot.exists()) {
		// create and set document with data from userAuth into collection
		const { displayName, email } = userAuth
		const createdAt = new Date()

		// this is for async code
		try {
			await setDoc(userDocRef, { displayName, email, createdAt })
		} catch (error) {
			console.log('Error creating the user', error.message)
		}
	}

	// if user data exists
	// return user reference
	return userDocRef
}
