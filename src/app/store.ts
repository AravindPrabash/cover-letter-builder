import { configureStore } from '@reduxjs/toolkit';
import coverLetterSlice from '../routes/cover-letter-generator/coverLetterSlice';

export const store = configureStore({
  reducer: {
    coverLetter: coverLetterSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch