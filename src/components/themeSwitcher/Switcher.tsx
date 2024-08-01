import { useState } from 'react';
import { useDarkSide } from '../../app/hooks';

const Switcher = () => {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === 'dark' ? true : false
  );

  const toggleDarkMode = (checked: boolean) => {
    setTheme(colorTheme);
    setDarkSide(!checked);
  };

  return (
    <>
      {colorTheme === 'dark' ? 'light' : 'dark'}
      <input type='checkbox'
        style={{ marginBottom: '2rem' }}
        checked={darkSide}
        onChange={() => toggleDarkMode(darkSide)}
        size={30}
      />
    </>
  );
};

export default Switcher;