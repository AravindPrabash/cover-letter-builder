import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';
import { useState, useEffect, Dispatch, SetStateAction } from 'react';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

type Theme = 'light' | 'dark';
type UseDarkSideReturn = [Theme, Dispatch<SetStateAction<Theme>>];


export const useDarkSide = (): UseDarkSideReturn => {
  const [theme, setTheme] = useState<Theme>((localStorage.theme as Theme) || 'light');
  const colorTheme: Theme = theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', theme);
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    if (localStorage.theme == 'light')
      localStorage.removeItem('theme');
    else localStorage.setItem('theme', theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
};