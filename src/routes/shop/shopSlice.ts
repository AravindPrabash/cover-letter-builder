import { createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state
interface ShopState {
  status: 'succeeded' | 'idle',
  response?: Record<string, never>,
}

// Define the initial state using that type
const initialState: ShopState = {
  status: 'idle',
};

export const shopSlice = createSlice({
  name: 'shop',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeStatus: (state) => {
      state.status = 'succeeded';
    },
  },
});

export const { changeStatus } = shopSlice.actions;

export default shopSlice.reducer;