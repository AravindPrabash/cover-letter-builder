import { Outlet } from 'react-router-dom';
import Header from '../components/common/header/Header';

export default function Root() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}