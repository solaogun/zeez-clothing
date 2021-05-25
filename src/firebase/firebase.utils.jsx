
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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        } catch (error) {
            console.log('error creating user', error.message)
        }

    }
    return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
    const collectionRef = firestore.collection(collectionKey)
    console.log(collectionRef)

    const batch = firestore.batch()
    objectToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc()
        batch.set(newDocRef, obj)
    })
    return batch.commit()
}

export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data()

        return {
            routeName: encodeURI(title.toLowerCase()),
            title,
            items,
            id: doc.id
        }
    })
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator
    },
        {})
}

// firebase.initializeApp(Config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase