import { useEffect, useState } from 'react';
import { useDarkSide } from '../../../app/hooks';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Switcher = () => {
  const [theme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(theme === 'dark');

  useEffect(() => {
    setDarkSide(theme === 'dark');
  }, [theme]);

  const toggleDarkMode = (checked: boolean) => {
    setTheme(checked ? 'light' : 'dark');
  };

  return (
    <>
      <DarkModeSwitch
        checked={darkSide}
        onChange={toggleDarkMode}
        size={30}
      />
    </>
  );
};

export default Switcher;