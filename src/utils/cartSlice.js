import {createSlice} from '@reduxjs/toolkit';

const cartslice = createSlice({
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
        removeItem:(state,action)=>{
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if(index !== -1){
                state.totalPrice -= state.items[index].price;
                state.items.splice(index, 1);
            }
        },
        clearCart:(state)=>{
            state.items = [];
            state.totalPrice = 0;
        }
    }
});

export const {addItem,removeItem,clearCart} = cartslice.actions;

export default cartslice.reducer;
