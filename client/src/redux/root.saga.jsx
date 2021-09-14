import { all, call } from 'redux-saga/effects'
import { fetchCollectionsStart } from './shop/shop.saga'
import { userSagas } from './user/user.sagas'
import { cartSagas } from './cart/cart.saga'
import { shopSaga } from './shop/shop.saga'

export default function* rootSaga() {
    yield all([
        call(shopSaga),
        call(userSagas),
        call(cartSagas)
    ])
}






