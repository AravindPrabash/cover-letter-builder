import { createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state
interface CoverLetterState {
  status: 'succeeded' | 'idle',
  response?: Record<string, never>,
}

// Define the initial state using that type
const initialState: CoverLetterState = {
  status: 'idle',
};

export const coverLetterSlice = createSlice({
  name: 'coverLetter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeStatus: (state) => {
      state.status = 'succeeded';
    },
  },
});

export const { changeStatus } = coverLetterSlice.actions;

export default coverLetterSlice.reducer;