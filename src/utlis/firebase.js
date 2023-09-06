// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDyGOEEoJAlRhQh0JL8zbYnGIrJmk56-40',
	authDomain: 'netflixgpt-b50ac.firebaseapp.com',
	projectId: 'netflixgpt-b50ac',
	storageBucket: 'netflixgpt-b50ac.appspot.com',
	messagingSenderId: '112467987119',
	appId: '1:112467987119:web:cc1cb999091fe74656625a',
	measurementId: 'G-J94S8TY229',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
