// import SHOP_DATA from './shop.data'
import shopActionType from './shop.type'

const INITIAL_STATE = {
    collections: null
}

const shopReducer = (state = INITIAL_STATE, acttion) => {
    switch (acttion.type) {
        case shopActionType.UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: acttion.payload
            }
        default:
            return state;
    }
}

export default shopReducer