import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        allItems: [],
        cartItems:[],
        
    },
    reducers: {
        addItem: (state, action) => {
            state.cartItems.push(action.payload);
        },
        removeItem: (state, action) => {
            state.cartItems.pop();
        },
        clearCart: (state, action) => {
            state.cartItems.length = 0;
        },
        allItem: (state, action) => {
           state.allItems= [...state.allItems,...action.payload];
        },
    }
}
);

export default  cartSlice.reducer;
export const { addItem, removeItem, clearCart,allItem } = cartSlice.actions;