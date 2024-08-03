import { createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state
interface ThemeState {
  theme: 'dark' | 'light',
}

// Define the initial state using that type
const initialState: ThemeState = {
  theme: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;