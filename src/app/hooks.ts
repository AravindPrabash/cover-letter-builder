import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from './store';
import { toggleTheme } from './theme';
import { Theme, UseDarkSideReturn } from './types';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export const useDarkSide = (): UseDarkSideReturn => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();

  const colorTheme: Theme = theme === 'dark' ? 'light' : 'dark';

  const setTheme = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
  }, [theme, colorTheme]);

  return [theme, setTheme] as const;
};