import firebase from 'firebase/app'
import 'firebase/firestore'


const config = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB,
  projectId: process.env.REACT_APP_FIREBASE_PID,
  storageBucket: process.env.REACT_APP_FIREBASE_SB,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId:process.env.REACT_APP_FIREBASE_MID
}

firebase.initializeApp(config)

const database = firebase.firestore()
export { database }
