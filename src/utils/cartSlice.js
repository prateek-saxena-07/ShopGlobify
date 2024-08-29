import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        allItems: [],
        cartItems: [], // Cart items include quantities
    },
    reducers: {
        addItem: (state, action) => {
            const { id, name, price, description,images } = action.payload;
            const existingItem = state.cartItems.find(item => item.id === id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ id, name, price, description,images, quantity: 1 });
            }
        },
        removeItem: (state, action) => {
            const { id } = action.payload;
            const existingItem = state.cartItems.find(item => item.id === id);
            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity -= 1;
            } else {
                state.cartItems = state.cartItems.filter(item => item.id !== id);
            }
        },
        clearCart: (state, action) => {
            state.cartItems = [];
        },
        allItem: (state, action) => {
            state.allItems = [...state.allItems, ...action.payload];
        },
    },
});

export default cartSlice.reducer;
export const { addItem, removeItem, clearCart, allItem } = cartSlice.actions;
