import { NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../../../app/consts';
import Switcher from '../themeSwitcher/Switcher';
import styles from './header.module.scss';
import { useSelector } from 'react-redux';
import { Theme } from '../../../app/types';
import { RootState } from '../../../app/store';
import darkLogo from '../../../assets/store-dark.png';
import lightLogo from '../../../assets/store-light.png';

const NavLinks = () => (
  <div className="flex gap-10 text-slate-900 dark:text-slate-200 font-light">
    {NAV_LINKS.map((item, index) => (
      <NavLink className={({ isActive }) => isActive ? `${styles.link} ${styles.active} inline-flex items-center` : 'inline-flex items-center'} key={index} to={item.link}>{item.name}</NavLink>
    ))}
  </div>
);

const Header = () => {
  const theme = useSelector((state: RootState) => state.theme.theme) as Theme;
  return (
    <div className="sticky top-0 bg-slate-50 dark:bg-slate-950 border-b border-b-slate-300 dark:border-b-slate-600 p-4 backdrop-blur">
      <div className="flex justify-between max-w-screen-xl m-auto">
        <NavLinks />
        <div className={`flex text-black felx gap-4 dark:text-white text-2xl absolute ${styles.logo}`}>
          <img className="h-8 w-8" src={theme === 'dark' ? darkLogo : lightLogo } alt='Logo' />
          <h2>Mercantify</h2>
        </div>
        <Switcher />
      </div>
    </div>
  );
};

export default Header;