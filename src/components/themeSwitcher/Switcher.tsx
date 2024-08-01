import { useState } from 'react';
import { useDarkSide } from '../../app/hooks';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Switcher = () => {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === 'dark' ? false : true
  );

  const toggleDarkMode = (checked: boolean) => {
    setTheme(colorTheme);
    setDarkSide(checked);
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