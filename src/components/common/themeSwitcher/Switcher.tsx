import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { toggleTheme } from '../../../app/theme';
import { useEffect } from 'react';

const Switcher = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();

  const toggleDarkMode = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    const colorTheme = theme === 'dark' ? 'light' : 'dark';
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
  }, [theme]);

  return (
    <>
      <DarkModeSwitch
        checked={theme === 'dark'}
        onChange={toggleDarkMode}
        size={30}
      />
    </>
  );
};

export default Switcher;