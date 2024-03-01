// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
	getAuth,
	signInWithPopup,
	signInWithRedirect,
	GoogleAuthProvider,
} from 'firebase/auth'

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

const provider = new GoogleAuthProvider()

provider.setCustomParameters({ prompt: 'select_account' })

export const auth = getAuth()

export const signInWithGooglePopup = signInWithPopup(auth, provider)
