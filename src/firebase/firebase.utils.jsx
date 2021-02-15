
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const Config = {

    apiKey: "AIzaSyC8_3PBeFpmn0gnytAT4Qj-ULDocgC4XbU",
    authDomain: "zeez-db.firebaseapp.com",
    projectId: "zeez-db",
    storageBucket: "zeez-db.appspot.com",
    messagingSenderId: "95469708486",
    appId: "1:95469708486:web:4b1b96653784bccd9c63c7",
    measurementId: "G-V8WJGE1EPX"

}

firebase.initializeApp(Config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ propmt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase