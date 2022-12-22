import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
     let flag=true;
     for(let i=0;i<state.quantity;i++)
     {
        if(state.products[i]._id===action.payload._id)
        {
            state.products[i].quantity+=action.payload.quantity;
            flag=false;
        }
     };
     if(flag){
      state.quantity += 1;
      state.products.push(action.payload);
    };
    state.total += action.payload.price * action.payload.quantity;
  },
},
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;