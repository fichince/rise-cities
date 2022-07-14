import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const activeEnv = process.env.GATSBY_FIREBASE_ENVIRONMENT || process.env.NODE_ENV || "development"
const config = 
  process.env.FIRESTORE_CONFIG ?
    JSON.parse(Buffer.from(process.env.FIRESTORE_CONFIG, 'base64')) :
    require(`../../config/firebase-config.${process.env.GATSBY_FIREBASE_ENVIRONMENT}.json`)

let defaultFirebase = null;

console.log(`Using ${activeEnv} firebase configuration`)

if (!defaultFirebase) {
  defaultFirebase = firebase.initializeApp(config);
}

const firestore = firebase.firestore()

// const initAnalytics = async () => {
//   const analytics = await import("firebase/analytics")
// }

export default firebase;
export { firestore };
