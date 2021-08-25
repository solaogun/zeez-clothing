import { takeEvery, takeLatest, call, put, all } from 'redux-saga/effects'
import shopActionType from './shop.type'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import { fetchCollectionsSuccess, fetchCollectionsFailure } from '../shop/shop.action'

export function* fetchCollectionsAsync() {
    yield console.log('I am here')
    try {
        const collectionRef = firestore.collection('collections')
        const snapshot = yield collectionRef.get()
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
        yield put(fetchCollectionsSuccess(collectionsMap))
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message))
    }
}


export function* fetchCollectionsStart() {
    yield takeLatest(shopActionType.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}

export function* shopSaga() {
    yield all([call(fetchCollectionsStart)])
}


// export const fetchCollectionsStartAsync = () => {
//     return dispatch => {
//         const collectionRef = firestore.collection('collections')
//         dispatch(fetchCollectionsStart())

//         collectionRef.get().then(snapshot => {
//             const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
//             dispatch(fetchCollectionsSuccess(collectionsMap))
//         }).catch(error => dispatch(fetchCollectionsFailure(error.message)))}}