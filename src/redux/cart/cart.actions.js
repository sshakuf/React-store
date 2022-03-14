import { CartActionTypes } from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const CartAddItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});


