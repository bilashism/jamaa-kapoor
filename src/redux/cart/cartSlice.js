import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  loading: true,
  total: 0
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: state => (state.items = [])
  }
});

export default cartSlice.reducer;
