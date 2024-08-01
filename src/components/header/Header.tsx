import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../../app/consts';
import Switcher from '../themeSwitcher/Switcher';
import styles from './header.module.scss';

const NavLinks = () => (
  <div className="flex gap-3 text-black dark:text-white">
    {NAV_LINKS.map((item, index) => (
      <Link key={index} to={item.link}>{item.name}</Link>
    ))}
  </div>
);

const Header = () => (
  <div className="sticky top-0 w-full left-0 bg-slate-50 dark:bg-slate-950 border-b border-b-slate-300 p-4 backdrop-blur">
    <div className="flex justify-between max-w-screen-xl m-auto">
      <NavLinks />
      <div className={`font-bold text-black dark:text-white text-2xl absolute ${styles.logo}`}>
        <h2>Online Store</h2>
      </div>
      <Switcher />
    </div>
  </div>
);

export default Header;