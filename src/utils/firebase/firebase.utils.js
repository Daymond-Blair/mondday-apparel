// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
} from 'firebase/auth'

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

// create provider (google, github, facebook, etc...)
const googleProvider = new GoogleAuthProvider()

// set parameters for auth provider
googleProvider.setCustomParameters({ prompt: 'select_account' })

export const auth = getAuth()

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)

// instantiate the database
export const db = getFirestore()

// user account creation
export const createUserDocumentFromAuth = async (
	userAuth,
	additionalInformation = {},
) => {
	// if we don't get an argument passed in, don't run the function
	if (!userAuth) return

	const userDocRef = doc(db, 'users', userAuth.uid)

	// capture user data and credentials
	const userSnapshot = await getDoc(userDocRef)

	// if user data does not exist
	if (!userSnapshot.exists()) {
		// create and set document with data from userAuth into collection
		const { displayName, email } = userAuth
		const createdAt = new Date()

		// try-catch is used for async code
		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInformation,
			})
		} catch (error) {
			console.log('Error creating the user', error.message)
		}
	}

	// if user data exists
	// return user reference
	return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
	// if we don't get an argument passed in, don't run the function
	if (!email || !password) return

	return await createUserWithEmailAndPassword(auth, email, password)
}
