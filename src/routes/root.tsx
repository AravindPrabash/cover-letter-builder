import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';

export default function Root() {
  return (
    <div>
      <Header />
      <div className="pt-4 max-w-screen-xl m-auto">
        <Outlet />
      </div>
    </div>
  );
}