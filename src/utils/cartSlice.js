import createSlice from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items: ["banana", "apple", "orange"],
        totalPrice:0
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
            state.totalPrice += action.payload.price;
        },
        
        clearCart:(state)=>{
            state.items = [];
            state.totalPrice = 0;
        }
    }
});
