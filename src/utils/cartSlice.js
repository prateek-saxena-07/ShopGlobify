import { createSlice } from '@reduxjs/toolkit';
//This Cart slice contains two state :allItems which contains all items that has to be loaded on product list and other one is to be loaded on CartPage and four reducer function to perform various action such as add,remove,clear.

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        allItems: [],
        cartItems: [], // Cart items include quantities added in the cart as well
    },
    reducers: {
        addItem: (state, action) => {
            const { id, title, price, description,images } = action.payload;
            const existingItem = state.cartItems.find(item => item.id === id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ id, title,price, description,images, quantity: 1 });
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
