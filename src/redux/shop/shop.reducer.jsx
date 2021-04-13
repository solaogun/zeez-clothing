import SHOP_DATA from './shop.data'

const INITIAL_STATE = {
    collections: SHOP_DATA
}

const shopReducer = (state = INITIAL_STATE, acttion) => {
    switch (acttion.type) {
        default:
            return state;
    }
}

export default shopReducer